import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { fetchNews, fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction, createClippedNewsTile } from '../actions';
import NewsCard from './NewsCard';
import headerImg from '../main-news-header.png';



class NewsList extends React.Component {
    state = {
        scrapbooknewsRendered: false,
        selectedOption: "All"
    }

    componentDidMount(){
        if(!localStorage.getItem('user')){
            this.props.history.push('/login')
        } else{
        this.getUserData()
        if(this.props.news.length < 1){
        this.props.fetchNews()
        }
        setTimeout(()=> this.findClippedNews(), 500);
      }
    }

    renderNews = () => {
        if (this.state.selectedOption === "All"){
        const sortedNews = this.props.news.sort((a, b) => (a.viewCount > b.viewCount) ? -1 : 1);
       return sortedNews.map(news => {
        return (
            < NewsCard news={news} key={news.id} />
            )
        })
        } else {
            const filtered = this.props.news.filter(news => news.category === this.state.selectedOption);
            const sortedfiltered = filtered.sort((a, b) => (a.viewCount > b.viewCount) ? -1 : 1);
            return sortedfiltered.map(news => {
                return (
                    < NewsCard news={news} key={news.id} />
                )
            })
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

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
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
                <div className="underline"></div>
                    {this.props.loader ? 
                    <div>
                        <h1 className="loading-sentence">Loading...</h1> 
                        <div className="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    :
                    <div>
                        <form className="radio-checkbox-container">
                        <div className="radio">
                        <label className="radio-label">
                            <input type="radio" value="All" 
                            checked={this.state.selectedOption === 'All'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            All
                        </label>
                        </div>
                        <div className="radio">
                        <label className="radio-label">
                            <input type="radio" value="Apple" 
                            checked={this.state.selectedOption === 'Apple'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Apple
                        </label>
                        </div>
                        <div className="radio">
                        <label className="radio-label">
                            <input type="radio" value="TechCrunch" 
                            checked={this.state.selectedOption === 'TechCrunch'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Tech Crunch
                        </label>
                        </div>
                        <div className="radio">
                        <label className="radio-label">
                            <input type="radio" value="bitcoin" 
                            checked={this.state.selectedOption === 'bitcoin'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Bitcoin
                        </label>
                        </div>
                        <div className="radio">
                        <label className="radio-label">
                            <input type="radio" value="Top business headlines" 
                            checked={this.state.selectedOption === 'Top business headlines'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Top Business Headlines
                        </label>
                        </div>
                    </form>

                    <div className="wrapper"> 
                        {this.renderNews()}
                    </div>
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