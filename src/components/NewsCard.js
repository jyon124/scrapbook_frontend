import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class NewsCard extends React.Component {
  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/')
    } 
  }

render(){
    return(
<section className="newscards" key={this.props.id}>
  <article className="card">
    <img className="newsImg" src={this.props.news.urlToImage} alt="news" />
    <div className="card__info">
      <span className="card__category">{this.props.news.category}</span>
      <h4 className="card__title">{this.props.news.title}</h4>
       <span className="card__by">
         <Link to={`/newslist/${this.props.news.id}`} className="card__link" title="author">
             View Full Coverage
             </Link>
      </span>
    </div>
  </article>
</section>
    )
  }
}
export default NewsCard;