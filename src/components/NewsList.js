import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchNews } from '../actions';


class NewsList extends React.Component {
    constructor(props){
        super(props);
        props.fetchNews()
    }

    componentDidMount = () => {

    }
 
    render(){
        return(
        <div>
            <h1>NewsList</h1>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news
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