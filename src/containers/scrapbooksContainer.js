import React from 'react';
import { connect } from 'react-redux';
import ClippedNewsCard from '../components/ClippedNewsCard'
import { fetchUser, fetchScrapbook, fetchAllScrapbooknewsAction, fetchNews, createClippedNewsTile } from '../actions'
import scrapbookHeader from '../scrapbook-header.jpeg';

class ScrapBooksContainers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrapbooknewsRendered: false
        }
    }
    
    componentDidMount = () => {
        if(!localStorage.getItem('user')){
            this.props.history.push('/login')
        } else {
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
        if(this.props.allScrapbooknews.length < 1 && this.state.scrapbooknewsRendered === false){
        this.props.fetchAllScrapbooknews(scrapbookId);
        this.setState({
                scrapbooknewsRendered: true
            });
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
           if(news !== undefined){
            return (
                < ClippedNewsCard newsCard={news} key={news.id} />
              )
            }
         })
     }
 
    render(){
        return (
            <div>
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                <div className="head-img-container">
                    <img alt="scrapbookHeader" className="head-img-banner-saved" src={scrapbookHeader} />
                </div>
                <h1 className="title">SCRAPBOOKS</h1>
                <div className="underline"></div>
                <section className="newslist-container">
                    {this.props.clippedNewsTile.length > 0 ? 
                        <div className="saved-tile"> 
                            {this.renderClippedNewsTile()}
                        </div>
                        : 
                        <div>
                            {
                            this.props.clippedNewsTile.length === 0 ?
                            <h2 className="no-post">You haven't saved any post yet.</h2>
                            :
                            <div>
                                <h1 className="loading-sentence">Loading...</h1> 
                                <div className="lds-spinner">
                                    <div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div>
                                </div>
                            </div>
                            }
                        </div>
                        } 
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