import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class NewsCard extends React.Component {
    state = {
    newsId: this.props.news.id,
    foundIdArr: []
  }

  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/')
    } else {
      setTimeout(()=> {this.handleSavedState()}, 3000)
    }
 
  }

  handleSavedState = () => {
    if(this.state.newsId){
      const found = this.props.clippedNewsTile.find(tile => {
       return tile.id == this.state.newsId
      });
    return found
    }
  }


render(){
    return(
      <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover card">

        <img src={this.props.news.urlToImage} alt="Man with backpack" className="d-block w-full" />
      <div className="px-2 py-2">
        <p className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
          {this.props.news.category.charAt(0).toUpperCase() + this.props.news.category.slice(1)}
        </p>
        <h1 style={{'fontSize':'20px'}} className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
          {this.props.news.title}
        </h1>
        <p className="mb-1" style={{'fontSize': '13px'}}>
          {this.props.news.description}
        </p>
        <div className="border-bottom-coverage">

        </div>
      </div>
        <Link to={`/newslist/${this.props.news.id}`} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">
          View Full Coverage
          {
        this.handleSavedState() ? 
        <img className="saveTag" src="https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-05-512.png" />
        :
        null
        }
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

export default connect(mapStateToProps, null)(NewsCard);