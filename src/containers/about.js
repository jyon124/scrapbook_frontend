import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class About extends React.Component {

    render(){
        return(
            <div className="about-container">
                <h1 className="about">About</h1>

                <p className="about-content1">Our mission is to increase the public's interest and understanding of what's happening in the world.</p>

                <h2 className="about-how"><i>How?</i></h2>

                <p className="about-content2">
                    This page eases access to news for any reader and provide various way to assist better understanding of content 
                    by allowing reader to save choice of post into their scrapbook page.
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getUser: state.getUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    getUserInfo: () => {
            dispatch(fetchUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);