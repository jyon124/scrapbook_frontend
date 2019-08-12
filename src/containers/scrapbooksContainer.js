import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchScrapbook } from '../actions'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ScrapBooksContainers extends React.Component {

    componentDidMount = () => {
        this.getUserData()
    }

    getUserData = () => {
        if(this.props.getUser.length < 1){
            this.props.getUserInfo()
        }
    }

    initializeScrapbook = (id) => {
            this.props.findScrapbook(id)
    }
 
    render(){
        return (
            <div>
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                <h1>SCRAPBOOK CONTAINER</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      getUser: state.getUser
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => {
            dispatch(fetchUser())
        },
        findScrapbook: (id) => {
            dispatch(fetchScrapbook(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrapBooksContainers);