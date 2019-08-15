import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { fetchNews, fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction, createClippedNewsTile } from '../actions';
import NewsCard from './NewsCard'
import headerImg from '../header_news_img.png';



class NewsList extends React.Component {
    state = {
        scrapbooknewsRendered: false
    }

    componentDidMount(){
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

    renderNews = () => {
       return this.props.news.map(news => {
        return (
            < NewsCard news={news} key={news.id} />
            )
        })
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
        if(this.props.allScrapbooknews.length < 1 && this.state.scrapbooknewsRendered === false){
        this.props.fetchAllScrapbooknews(scrapbookId)
        this.state.scrapbooknewsRendered = true
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

    render(){
        return(
        <Switch>
            <Route path='/newslist' render={()=> {
                return <div className="newslist-container">
                <div className="head-img-container">
                    <img className="head-img-banner" src={headerImg} />
                 </div>
                     {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                <h1 className="title">News</h1>
                <div className="underline"></div>
                    {this.props.loader ? 
                    <h1>Loading...</h1> 
                    :
                    <div className="wrapper"> 
                        {this.renderNews()}
                    </div>
                    }
                </div>
            }}/>
        </Switch>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news,
        loader: state.loader,
        clippedNews: state.clippedNews,
        getUser: state.getUser,
        scrapbookContainer: state.scrapbookContainer,
        showNews: state.showNews,
        allScrapbooknews: state.allScrapbooknews,
        clippedNewsTile: state.clippedNewsTile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    fetchNews: () => {
        dispatch(fetchNews())
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);