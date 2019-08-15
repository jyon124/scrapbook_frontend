import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class NewsCard extends React.Component {
  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/')
    } else {
      // setTimeout(()=> {this.handleSavedState(this.props.news.id)}, 3000)
    }
  }

  // handleSavedState = (newsId) => {
  //     this.props.clippedNewsTile.find(function(tile){
  //       // console.log(tile.id, newsId, tile.id == newsId)
  //       return tile.id == newsId
  //     })
  // }

  // to turn on green or red light on card
  // this.props.news are objects so, it has to iterate.

render(){
    return(
    <div className="center">
        {/* {this.handleSavedState(this.props.news.id) == true ? 
          <div>o</div>
          : 
          <div>x</div>
        } */}
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

          <h4>✓</h4>
          
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