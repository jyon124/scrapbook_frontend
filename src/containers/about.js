import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import headerImg from '../aboutus.jpg';


class About extends React.Component {

    render(){
        return(
            <div>
                <div className="head-img-container">
                    <img alt="headerImg" className="about-header" src={headerImg} />
                </div>

                <div className="about-container">
                    <p className="about-content1">
                        This page helps people to gain interest and to understand about the issues happening around the world.
                    </p>

                    <div className="about-color-box"></div>
                    <h2 className="about-how"><i>How?</i></h2>
                    <div className="how-underline"></div>

                    <p className="about-content2">
                        This page allows access to news to anyone whose interested in viewing the world news on a single website. It provides various
                        ways to assist better understanding of the contents by allowing the readers to save any wished posts into their scrapbook page.
                    </p>
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

const mapDispatchToProps = (dispatch) => {
    return{
    getUserInfo: () => {
            dispatch(fetchUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);