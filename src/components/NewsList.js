import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchNews } from '../actions';
import NewsCard from './NewsCard'


class NewsList extends React.Component {

    componentDidMount(){
        this.props.fetchNews()
    }

    renderNews = () => {
       return this.props.news.map(news => {
        return (
            < NewsCard news={news} />
            )
        })
    }

    render(){
        return(
        <Switch>
            <Route path='/newslist/:newsId' render={(route) => {
            console.log('route', route.match.params)
            const id = route.match.params.newsId
            const news = this.props.news.find(news => news.id === id)
            console.log(news)
            return <div>
                {/* <NewsShow oneNews={this.props.news} /> */}
            </div>
            }} />
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
        loader: state.loader
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