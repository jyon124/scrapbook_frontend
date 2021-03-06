import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTile, postClip, clearAllNewsState } from '../actions';
import Api from '../services/Api';

class NewsCard extends React.Component {
    state = {
    newsId: this.props.news.id,
    foundIdArr: []
  }

  componentDidMount(){
    if(!localStorage.getItem('user')){
    } else {
      this.handleSavedState();
    }
  }

  handleSavedState = () => {
    if(this.state.newsId){
      const found = this.props.clippedNewsTile.find(tile => {
        if(tile !== undefined){
          return tile.id === this.state.newsId;
        }
      });
    return found
    }
  }

  handleView = (news) => {
    Api.increaseView(news);
    this.props.clearNewsState();
  }

  handleFavorite = (newsId, scrapbookContainerId, e) => {
    const check = this.props.allScrapbooknews.find(news => {return news.news_id === newsId})
    if(!check && e.target.innerText !== "❤️"){
    this.props.clipNews(newsId, scrapbookContainerId)
      e.target.innerText = "❤️";
  } else {
    const tile = this.props.allScrapbooknews.find(news => {return news.news_id === newsId})
    this.props.unSave(tile)
    e.target.innerText = "♡";
  }
}

render(){
    return(
      <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover card">

        <img src={this.props.news.urlToImage} alt="news" className="d-block w-full" />
      <div className="px-2 py-2">
        <p className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
          {this.props.news.category.charAt(0).toUpperCase() + this.props.news.category.slice(1)}
        </p>

        <h5 className="published-date">{this.props.news.publishedAt ? this.props.news.publishedAt.split("T")[0].split("-").join(" ") : null}</h5>
        <h5 className="view-count">{this.props.news.viewCount} views</h5>

        <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          {this.props.news.title}
        </h1>
        <p className="mb-1 card-description">
          {this.props.news.description}
        </p>
      <div className="border-bottom-coverage">
        {localStorage.getItem('user') ?

        <div>
        {
        this.handleSavedState() ? 
        <div className="saveTag" onClick={(e) => this.handleFavorite(this.props.news.id, this.props.scrapbookContainer.id, e)}><span role="img" aria-label="filledheart">❤️</span></div>
        :
        <div className="saveTag" onClick={(e) => this.handleFavorite(this.props.news.id, this.props.scrapbookContainer.id, e)}><span role="img" aria-label="emptyHeart">♡</span></div>
        }
        </div>
        :
        null
        }
      </div>

      </div>
          <Link to={`/newslist/${this.props.news.id}`} onClick={() => this.handleView(this.props.news)} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
            View Full Coverage
          </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      clippedNews: state.clippedNews,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      showNews: state.showNews,
      allScrapbooknews: state.allScrapbooknews,
      clippedNewsTile: state.clippedNewsTile
  }
}

const mapDispatchToProps = dispatch => {
  return {
      clipNews: (newsId, scrapbookContainerId) => {
          dispatch(postClip(newsId, scrapbookContainerId))
      },
      unSave: (tile) => {
          dispatch(removeTile(tile))
      },
      clearNewsState: () => {
        dispatch(clearAllNewsState())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);