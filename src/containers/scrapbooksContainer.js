import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction, fetchNews } from '../actions'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ScrapBooksContainers extends React.Component {

    componentDidMount = () => {
        this.getUserData()
        if(this.props.news.length < 1){
            this.props.fetchNews()
        }
        // console.log(this.props.getUser.id)
        // this.initializeScrapbook(this.props.getUser.id)
        // this.getAllScrapbook(this.props.scrapbookContainer.id)
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
        // When refresh occur, its duplicate
        //this.findClippedNews()
        // setTimeout(()=> this.findClippedNews(), 100);
        }
    }

    // findClippedNews = () => {
    //     const newsIdArr = this.props.allScrapbooknews.map(news => {
    //         return news.news_id
    //     })
    //     const allNews = this.props.news

    //     const clippedNews = newsIdArr.map((id) => {
    //         const newsObj = allNews.filter(news => news.id  === id)
    //         return newsObj[0]
    //     })

    //     console.log(clippedNews)
    // }
 
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
        },
        fetchNews: () => {
            dispatch(fetchNews())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrapBooksContainers);