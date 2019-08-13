import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
// import { showNews, fetchUser, fetchScrapbook, postClip } from '../actions';



class NewsShow extends Component {


    render(){
        return (
            <div>
                AH
                {/* {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                <img src={this.props.showNews.urlToImage} alt="news display" />
                <br/>
                <button onClick={() => this.handleFavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>Clip</button>
                <h1>Title: {this.props.showNews.title}</h1>
                <h2>Category: {this.props.showNews.category}</h2>
                {this.props.showNews.author === null ? null : <h2>Author: {this.props.showNews.author}</h2>}
                <h3>Description: {this.props.showNews.description}</h3>
                <p>{this.props.showNews.content}</p>
                <h4>{this.props.showNews.publishedAt}</h4>
                <button onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
                <br/><br/><br/> */}
            </div>
        )
      }
    }

const mapStateToProps = (state) => {
    return {
      showNews: state.showNews,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      allScrapbooknews: state.allScrapbooknews
    }
  }


export default connect(mapStateToProps, null)(NewsShow);