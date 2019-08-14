import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { showNews, fetchUser, fetchScrapbook, postClip, removeTile } from '../actions';



class NewsShow extends Component {
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
        // Need Refresh to check unsaved
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
                <h4>{this.props.showNews.publishedAt}</h4>
                <button onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
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