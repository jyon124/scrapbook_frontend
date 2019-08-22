import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ClippedNewsCard extends React.Component {

  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/login')
    } 
  }

render(){
    return(
        <div className="book-container" key={this.props.newsCard.id}>
          <Link to={`/scrapbooks/${this.props.getUser.id}/scrapbooknews/${this.props.newsCard.id}`} className="link-saved" title="view">
            <div className="book">
              <div className="book-front">
                <div className="book-cover">
                <img className="book-image" alt="news" src={this.props.newsCard.urlToImage} />
                <p className="book-author">{this.props.newsCard.title}</p>
                </div>
              </div>
              <div className="left-side">
                <h2>
                  <span>{this.props.newsCard.category.charAt(0).toUpperCase() + this.props.newsCard.category.slice(1)}</span>
                  <span>{this.props.newsCard.publishedAt}</span>
                </h2>
              </div>
            </div>
          </Link>
        </div>
    )
  }
}



const mapStateToProps = (state) => {
    return {
      getUser: state.getUser
    }
  }

export default connect(mapStateToProps, null)(ClippedNewsCard);