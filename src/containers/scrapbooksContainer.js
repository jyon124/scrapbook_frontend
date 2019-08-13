import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction } from '../actions'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ScrapBooksContainers extends React.Component {

    componentDidMount = () => {
        this.getUserData()
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
        // Need to modify this if statement so, user don't need to refresh to update tile.
        setTimeout(()=> this.findClippedNews(), 100);
        }
    }

    findClippedNews = () => {
        console.log(this.props.allScrapbooknews)
        const newsId = this.props.allScrapbooknews.map(news => {
            return news.news_id
        })
        console.log(newsId)
        // Before find the way to use includes, make all news dispatch call here
    }
 
    render(){
        return (
            <div>
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                <h1>SCRAPBOOK CONTAINER</h1>
                <section className="scrapbook-container">

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
      clippedNews: state.clippedNews,
      allScrapbooknews: state.allScrapbooknews
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrapBooksContainers);