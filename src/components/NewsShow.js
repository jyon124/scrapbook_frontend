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

    handleFavorite = (newsId, scrapbookContainerId) => {
        const check = this.props.allScrapbooknews.find(news => {return news.news_id === newsId})
        if(!check){
        this.props.clipNews(newsId, scrapbookContainerId)
        alert('Successfully Saved');
            this.props.history.push('/newslist');
        } else {
            alert('Already Saved');
        }
    }

    handleSaveBtnState = () => {
        return this.props.clippedNewsTile.filter(news => {
            return news.id === this.props.showNews.id
        })
    }

    render(){
        return (
            <div className="showNews-container">
                {this.props.showNews.id ?
            <div className="newspaper">
            <div className="head">
                <div className="headerobjectswrapper">
                    {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                    <header>{this.props.showNews.category.charAt(0).toUpperCase() + this.props.showNews.category.slice(1)} Times</header>
                </div>
                <div className="subhead">{this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null}</div>
            </div>
            <div className="content">
                <div className="collumns">
                    <div className="collumn">
                        <div className="head"><span className="headline hl3">{this.props.showNews.title}</span>
                            <p>
                               <span className="headline hl4">
                                    {this.props.showNews.author === null ? null : <span className="author">{this.props.showNews.author}</span>}
                               </span>
                            </p>
                        </div>
                        <figure className="figure">
                           <img className="media" src={this.props.showNews.urlToImage} alt="news display" />
                        </figure>
                        <p>
                           <i>{this.props.showNews.description}</i>
                        </p>
                        <p className="news-content">
                           {this.props.showNews.content}
                        </p>
                    </div>
                </div>
            </div>
            {
            this.handleSaveBtnState().length > 0 ? 
            <button className="saved-btn">Saved</button>
            :
            <button className="save-btn" onClick={() => this.handleFavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>Save</button>
            }
            <button className="link-btn" onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
            </div>
            :
             null
            }
        </div>
        )
      }
    }

const mapStateToProps = (state) => {
    return {
      showNews: state.showNews,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      allScrapbooknews: state.allScrapbooknews,
      clippedNewsTile: state.clippedNewsTile
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