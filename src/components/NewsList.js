import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { fetchNews, fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction, createClippedNewsTile } from '../actions';
import NewsCard from './NewsCard'
// import headerImg from '../header_news_img.png';



class NewsList extends React.Component {
    state = {
        scrapbooknewsRendered: false,
        selectedOption: "All"
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

    // Based on state filter the news
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
                    <img className="head-img-banner" src="http://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/Blog_title_image.jpg" />
                 </div>
                     {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                {/* <h1 className="title">News</h1> */}
                <div className="underline"></div>
                    {this.props.loader ? 
                    <h1>Loading...</h1> 
                    :
                    <div>
                        <form>
                        <div className="radio">
                        <label>
                            <input type="radio" value="All" 
                            checked={this.state.selectedOption === 'All'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            All
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Apple" 
                            checked={this.state.selectedOption === 'Apple'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Apple
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="TechCrunch" 
                            checked={this.state.selectedOption === 'TechCrunch'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Tech Crunch
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Bitcoin" 
                            checked={this.state.selectedOption === 'Bitcoin'} 
                            onChange={(e) => this.handleOptionChange(e)} />
                            Bitcoin
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="TopBusinessHeadlines" 
                            checked={this.state.selectedOption === 'TopBusinessHeadlines'} 
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