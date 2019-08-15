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
      <div className="center" key={this.props.newsCard.id}>
        <div className="card">
            <img className="additional" alt="news" src={this.props.newsCard.urlToImage} />
            <div className="more-info">
              <div className="coords">
              </div>
            </div>
          <div className="general">
            <h3>{this.props.newsCard.title}</h3>
            <p>{this.props.newsCard.category.charAt(0).toUpperCase() + this.props.newsCard.category.slice(1)}</p>
            <Link to={`/scrapbooks/${this.props.getUser.id}/scrapbooknews/${this.props.newsCard.id}`} className="more" title="author">
              View Full Coverage
            </Link>
          </div>
        </div>
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