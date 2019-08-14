import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ClippedNewsCard extends React.Component {

  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/')
    } 
  }

render(){
    return(
<section className="newscards" key={this.props.newsCard.id}>
  <article className="card">
    <img className="newsImg" src={this.props.newsCard.urlToImage} alt="news" />
    <div className="card__info">
      <span className="card__category">{this.props.newsCard.category}</span>
      <h4 className="card__title">{this.props.newsCard.title}</h4>
       <span className="card__by">
         <Link to={`/scrapbooks/${this.props.getUser.id}/scrapbooknews/${this.props.newsCard.id}`} className="card__link" title="author">
             View Full Coverage
             </Link>
      </span>
    </div>
  </article>
</section>
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

export default connect(mapStateToProps, null)(ClippedNewsCard);