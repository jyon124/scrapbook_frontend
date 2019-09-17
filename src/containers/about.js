import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import headerImg from '../aboutus.jpg';


// API Keys ( 9/17/2019 ) posted

// Bitcoin = fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-17&sortBy=publishedAt&apiKey=e9c0304ad98341b7a7173f9e047cbfd4')
// Apple = fetch('https://newsapi.org/v2/everything?q=apple&from=2019-09-16&to=2019-09-16&sortBy=popularity&apiKey=e9c0304ad98341b7a7173f9e047cbfd4')
// Top Business Headlines = fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9c0304ad98341b7a7173f9e047cbfd4')
// Tech Crunch = fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e9c0304ad98341b7a7173f9e047cbfd4')
// Wall Street Journal = fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e9c0304ad98341b7a7173f9e047cbfd4')


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