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
        </div>
      </div>
    </div>
    )
  }
}
export default NewsCard;
