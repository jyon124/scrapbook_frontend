import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { showNews, fetchUser, fetchScrapbook, postClip, removeTile, fetchAllScrapbooknewsAction, deleteNoteReq } from '../actions';
import ReactDOM from 'react-dom';


class NewsShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            selectedSentence: ''
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
        .then(note => {
            this.handleRenderNewNote(note)
        })
        this.setState({content: ''})
    }

    handleRenderNewNote = (note) => {
        const noteUl = document.getElementById('notes');
        const li = document.createElement('li');
        li.className = 'single-note-content';
        const btn = document.createElement('button');
        btn.innerText = 'x';
        btn.addEventListener('click', (e)=> this.handleDeleteNote(e, note.id));
        li.innerText = note.content;
        li.append(btn);
        noteUl.append(li);
    }

    handleRenderNotes = () => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        if (scrapbooknews.notes !== undefined){
        return scrapbooknews.notes.map(note => {
            return <li key={note.id} className="single-note-content">{note.content}<button onClick={(e) => this.handleDeleteNote(e, note.id)}>x</button></li>
        })
       }
    }

    handleDeleteNote = (e, noteId) => {
        this.props.deleteNote(noteId)
        e.target.parentNode.remove();
    }

    getAllScrapbook = (scrapbookId) => {
        if(this.props.allScrapbooknews.length < 1){
        this.props.fetchAllScrapbooknews(scrapbookId)
        }
    }

    ////// HIGHLIGHT FUNCTION BELOW ///////

    getSelection(){
        window.getSelection()
        console.log(window.getSelection().toString());
        this.setState({
            selectedSentence: window.getSelection().toString()
        })
    }
    
    render(){
        return (
            <div className="scrapbooknews-display">
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                <img className="scrapbooknews-img" src={this.props.showNews.urlToImage} alt="news display" />
                <br/>
                <button onClick={() => this.handleUnfavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>UnSave</button>
                <div className="news-content">
                <h1>Title: {this.props.showNews.title}</h1>
                <h2>Category: {this.props.showNews.category}</h2>
                {this.props.showNews.author === null ? null : <h2>Author: {this.props.showNews.author}</h2>}
                <h3>Description: {this.props.showNews.description}</h3>

                <h4 style={{'color':'red'}}>{this.state.selectedSentence}</h4>
                <p onMouseUp={() => this.getSelection()}>{this.props.showNews.content}</p>
                
                <h4>Published at: {this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null}</h4>
                <button onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
                </div>
                <form className="notes-form" onSubmit={(e) => {this.handlePostNotes(e)}}>
                    <label>Notes: </label><br/>
                    ​<textarea id="txtArea" rows="10" cols="58" onChange={(e) => this.handleNotesChange(e)} value={this.state.content}></textarea>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                {
                this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                    <ul id="notes" className="note">
                        {this.handleRenderNotes()}
                    </ul>
                : 
                console.log('No Notes')
                }

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
        },
        fetchAllScrapbooknews: (scrapbookId) => {
            dispatch(fetchAllScrapbooknewsAction(scrapbookId))
        },
        deleteNote: (noteId) => {
            dispatch(deleteNoteReq(noteId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);