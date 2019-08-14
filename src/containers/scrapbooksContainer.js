import React from 'react';
import { connect } from 'react-redux';
import ClippedNewsCard from '../components/ClippedNewsCard'
import { fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction, fetchNews, createClippedNewsTile } from '../actions'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ScrapBooksContainers extends React.Component {

    componentDidMount = () => {
        if(!localStorage.getItem('user')){
            this.props.history.push('/')
        } else{
        this.getUserData()
        if(this.props.news.length < 1){
            this.props.fetchNews()
        }
        setTimeout(()=> this.findClippedNews(), 500);
      }
    }

    getUserData = () => {
        if(this.props.getUser.length < 1){
            this.props.getUserInfo()
        }
    }

    initializeScrapbook = (userid) => {
        if(this.props.scrapbookContainer.length < 1){
        this.props.findScrapbook(userid)
       }
    }

    getAllScrapbook = (scrapbookId) => {
        if(this.props.allScrapbooknews.length < 1){
        this.props.fetchAllScrapbooknews(scrapbookId)
        }
    }

    findClippedNews = () => {
        const newsIdArr = this.props.allScrapbooknews.map(news => {
            return news.news_id
        })
        const allNews = this.props.news
        const clippedNews = newsIdArr.map((id) => {
            const newsObj = allNews.filter(news => news.id  === id)
            return newsObj[0]
        })
       this.props.clippedNewsTileCreation(clippedNews)
    }

    renderClippedNewsTile = () => {
        return this.props.clippedNewsTile.map(news => {
         return (
            < ClippedNewsCard newsCard={news} key={news.id} />
             )
         })
     }
 
    render(){
        return (
            <div>
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                <h1>SCRAPBOOK CONTAINER</h1>
                <section className="scrapbook-container">
                    {this.props.clippedNewsTile.length > 0 ? this.renderClippedNewsTile() : null } 
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      news: state.news,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      showNews: state.showNews,
      allScrapbooknews: state.allScrapbooknews,
      clippedNewsTile: state.clippedNewsTile
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => {
            dispatch(fetchUser())
        },
        findScrapbook: (userid) => {
            dispatch(fetchScrapbook(userid))
        },
        fetchAllScrapbooknews: (scrapbookId) => {
            dispatch(fetchAllScrapbooknewsAction(scrapbookId))
        },
        fetchNews: () => {
            dispatch(fetchNews())
        },
        clippedNewsTileCreation: (clippedNews) => {
            dispatch(createClippedNewsTile(clippedNews))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrapBooksContainers);