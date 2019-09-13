import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import headerImg from '../aboutus.jpg';

// import NewsCard from '../components/NewsCard';

class About extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         news: ''
    //     }
    // }

    // componentDidMount = () => {
    //     this.renderRecentNews();
    // }

    // renderRecentNews = () => {
    //     fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-12&sortBy=publishedAt&apiKey=e9c0304ad98341b7a7173f9e047cbfd4')
    //     .then(resp => resp.json())
    //     .then(news => this.setState({news: news.articles}))
    // }

    // handleDisplayRecentNews = (news) => {
    //     if(this.state.news !== ''){
    //         return this.state.news.map(news => {
    //             return(
    //                 < NewsCard news={news} key={news.id} />
    //             )
    //         })
    //     }
    // }

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
                {/* <h1>Recent News</h1>
                        <div className='wrapper'>
                            {this.handleDisplayRecentNews()}
                        </div>
                <hr/> */}
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