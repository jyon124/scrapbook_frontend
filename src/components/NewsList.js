import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { fetchNews } from '../actions';
import NewsCard from './NewsCard'


class NewsList extends React.Component {

    componentDidMount(){
        if(this.props.news.length < 1){
        this.props.fetchNews()
        }
    }

    renderNews = () => {
       return this.props.news.map(news => {
        return (
            < NewsCard news={news} key={news.id} />
            )
        })
    }

    render(){
        return(
        <Switch>
            <Route path='/newslist' render={()=> {
                return <div>
                <h1>NewsList</h1>
                    {this.props.loader ? <h1>Loading...</h1> : this.renderNews()}
                </div>
            }}/>
        </Switch>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news,
        loader: state.loader,
        clippedNews: state.clippedNews
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    fetchNews: () => {
        dispatch(fetchNews())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);