import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { showNews, fetchUser, fetchScrapbook, postClip } from '../actions';



class NewsShow extends Component {
    fetchNews = (id) => {
        Api.fetchOneNews(id)
        .then(news => {
            this.props.getShowNews(news)
        })
    }

    getNews = () => {
        const id = this.props.match.params.id
        if(Number(id)){
            this.fetchNews(id)
        } else {
            this.props.history.push('/newslist')
        }
    }

    getUserData = () => {
        if(this.props.getUser.length < 1){
            this.props.getUserInfo()
        }
    }

    componentDidMount(){
        this.getNews()
        this.getUserData()
    }

    initializeScrapbook = (id) => {
        if(this.props.scrapbookContainer.length < 1){
        this.props.findScrapbook(id)
        }
    }

    handleFavorite = (newsId, scrapbookContainerId) => {
        const check = this.props.clippedNews.find(news => {return news.news_id === newsId})
        if(!check){
        this.props.clipNews(newsId, scrapbookContainerId)
        } else {
            console.log('Already Added')
        }
    }

    render(){
        return (
            <div>
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                <img src={this.props.showNews.urlToImage} alt="news display" />
                <br/>
                <button onClick={() => this.handleFavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>Clip</button>
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
      showNews: state.showNews,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      clippedNews: state.clippedNews
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);