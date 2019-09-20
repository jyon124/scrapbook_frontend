import React, { Component } from 'react';
import Api from '../services/Api';
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
        window.scrollTo(0, 0);
        if(!localStorage.getItem('user')){
            // this.props.history.push('/login')
        this.getNews()
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
            <figure className="figure">
                <img className="media" src={this.props.showNews.urlToImage} alt="news display" />
            </figure>
            <div className="head">
                <div className="headerobjectswrapper">
                    {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                    <span className="headline news-title">{this.props.showNews.title}</span>
                    <header className="showNews-category">{this.props.showNews.category.toUpperCase()}</header>
                </div>
            </div>
            <div className="content">
                <div className="collumns">
                    <div className="collumn">
                        <div className="head">
                            <div>
                               <span className="headline hl4">
                                    {this.props.showNews.author === null ? null : <span className="author">by {this.props.showNews.author}</span>}
                               </span>
                               <div className="subhead">{this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null}</div>
                               <div className="underline-newsShow"></div>
                            </div>
                        </div>
                        <p className="news-content">
                           <span className="initial-letter">{this.props.showNews.content.charAt()}</span>
                           {this.props.showNews.content.split('').slice(1)} 
                        </p>
                    </div>
                </div>
            </div>

            <div className="btn-container">
            {
            localStorage.getItem('user') ?
            <div className="save-btn-container">
            {
            this.handleSaveBtnState().length > 0 ? 
            <button className="saved-btn">Saved</button>
            :
            <button className="save-btn" onClick={() => this.handleFavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>Save</button>
            }
            </div>
            :
            null
            }
            <button className="link-btn" onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
            </div>

            </div>
            :
            <div>
                <h1 className="loading-sentence">Loading...</h1> 
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
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