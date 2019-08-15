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
    <div className="center">
      <div className="card">
          <img className="additional" alt="news" src={this.props.news.urlToImage} />
          <div className="more-info">
            <div className="coords">
            </div>
          </div>
        <div className="general">
          <h3>{this.props.news.title}</h3>
          <p>{this.props.news.category}</p>
          <Link to={`/newslist/${this.props.news.id}`} className="more" title="author">
            View Full Coverage
          </Link>
          {this.handleSavedState() ? 
          <img className="saveTag" src="https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-05-512.png" />
          :
          null
          }
        </div>
      </div>
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