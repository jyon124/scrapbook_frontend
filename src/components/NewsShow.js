import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { showNews } from '../actions'



class NewsShow extends Component {
    fetchNews = (id) => {
        Api.fetchOneNews(id)
        .then(news => {
            this.props.showNews(news)
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

    componentDidMount(){
        this.getNews()
        console.log("news from store?", this.props.news)
        console.log("loader from store?", this.props.loader)
        console.log("showNews from store?", this.props.showNews)
    }


    render(){
        return (
            <div>
                <h1>Title: {this.props.showNews.title}</h1>
            </div>
        )
      }
    }

const mapStateToProps = (state) => {
    return {
      showNews: state.showNews
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        showNews: (oneNews) => {
            dispatch(showNews(oneNews))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);