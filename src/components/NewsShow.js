import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { showNews, fetchUser } from '../actions'



class NewsShow extends Component {
    fetchNews = (id) => {
        Api.fetchOneNews(id)
        .then(news => {
            this.props.getShowNews(news)
        })
    }

    getNews = () => {
        const id = this.props.match.params.id
        if(Number(id)){
            this.fetchNews(id)
        } else {
            this.props.history.push('/newslist')
        }
    }

    getUserData = () => {
        if(this.props.getUser.length < 1){
            this.props.getUserInfo()
        }
    }

    componentDidMount(){
        this.getNews()
        this.getUserData()
    }


    render(){
        return (
            <div>
                <img src={this.props.showNews.urlToImage} alt="news display" />
                <button>Clip</button>
                <h1>Title: {this.props.showNews.title}</h1>
                <h2>Category: {this.props.showNews.category}</h2>
                <h2>Author: {this.props.showNews.author}</h2>
                <h3>Description: {this.props.showNews.description}</h3>
                <p>{this.props.showNews.content}</p>
                <h4>{this.props.showNews.publishedAt}</h4>
                <button onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
                <br/><br/><br/>
            </div>
        )
      }
    }

const mapStateToProps = (state) => {
    return {
      showNews: state.showNews,
      getUser: state.getUser
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        getShowNews: (oneNews) => {
            dispatch(showNews(oneNews))
        },
        getUserInfo: () => {
            dispatch(fetchUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);