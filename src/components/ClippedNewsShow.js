import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { showNews, fetchUser, fetchScrapbook, postClip, removeTile } from '../actions';



class NewsShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }

    fetchNews = (id) => {
        Api.fetchOneNews(id)
        .then(news => {
            this.props.getShowNews(news)
        })
    }

    getNews = () => {
        const id = this.props.match.params.news_id
        if(Number(id)){
            this.fetchNews(id)
        } else {
            this.props.history.push('/scrapbooks')
        }
    }

    getUserData = () => {
        if(this.props.getUser.length < 1){
            this.props.getUserInfo()
        }
    }

    componentDidMount(){
        if(!localStorage.getItem('user')){
            this.props.history.push('/')
        } else{
        this.getNews()
        this.getUserData()
        }
    }

    initializeScrapbook = (id) => {
        if(this.props.scrapbookContainer.length < 1){
        this.props.findScrapbook(id)
        }
    }

    handleUnfavorite = (newsId, scrapbookContainerId) => {
        const tile = this.props.allScrapbooknews.find(news => {return news.news_id === newsId})
        this.props.unSave(tile)
        this.props.history.push('/scrapbooks')
    }

    handleNotesChange(e){
        this.setState({
            content: e.target.value
        })
    }

    handlePostNotes(e){
        e.preventDefault();
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        const bodyObj = {
            content: this.state.content,
            scrapbooknews_id: scrapbooknews.id
        }
        Api.handlePostReqNote(bodyObj)
    }

    handleRenderNotes = () => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        return scrapbooknews.notes.map(note => {
            return <li key={note.id}>{note.content}</li>
        })
    }
    

    render(){
        return (
            <div>
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                <img src={this.props.showNews.urlToImage} alt="news display" width="800em" />
                <br/>
                <button onClick={() => this.handleUnfavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>UnSave</button>
                <h1>Title: {this.props.showNews.title}</h1>
                <h2>Category: {this.props.showNews.category}</h2>
                {this.props.showNews.author === null ? null : <h2>Author: {this.props.showNews.author}</h2>}
                <h3>Description: {this.props.showNews.description}</h3>
                <p>{this.props.showNews.content}</p>
                <h4>Published at: {this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null}</h4>
                <button onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
                <br/><br/><br/>
                <hr/>
                <form onSubmit={(e) => {this.handlePostNotes(e)}}>
                    <label>Notes: </label><br/>
                    ​<textarea id="txtArea" rows="10" cols="70" onChange={(e) => this.handleNotesChange(e)} value={this.state.content}></textarea>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                {
                this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                <div>
                    <ul>
                        {this.handleRenderNotes()}
                    </ul>
                </div>
                : 
                console.log('boo')
                }

                <br/><br/><br/>
            </div>
        )
      }
    }

const mapStateToProps = (state) => {
    return {
      news: state.news,
      showNews: state.showNews,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      allScrapbooknews: state.allScrapbooknews
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        getShowNews: (oneNews) => {
            dispatch(showNews(oneNews))
        },
        getUserInfo: () => {
            dispatch(fetchUser())
        },
        findScrapbook: (id) => {
            dispatch(fetchScrapbook(id))
        },
        clipNews: (newsId, scrapbookContainerId) => {
            dispatch(postClip(newsId, scrapbookContainerId))
        },
        unSave: (tile) => {
            dispatch(removeTile(tile))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);