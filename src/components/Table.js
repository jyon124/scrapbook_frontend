import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Table extends React.Component {

  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/')
    } 
  }

render(){
    return(
      <div>
        <div class="tagged">
        <img src="https://farm2.static.flickr.com/1614/24750576181_1afecc12f6_b.jpg" alt="Photo of my workspace" class="tagged__image" />
        <span class="screen-reader-text">Essential items in my workspace:</span>
        <div class="tagged__tag tagged__tag--laptop">
            <a class="tagged__tag__button" role="button" tabindex="0" aria-hidden="true"></a>
            <article class="tagged__tag__content">
            <h3 class="tagged__tag__title">Laptop</h3>
            <p class="tagged__tag__text">A nice laptop to be able to code.</p>
            </article>
        </div>
        <div class="tagged__tag tagged__tag--smartphone">
            <a class="tagged__tag__button" role="button" tabindex="0" aria-hidden="true"></a>
            <article class="tagged__tag__content">
            <h3 class="tagged__tag__title">Smartphone</h3>
            <p class="tagged__tag__text">Always handy to have one nearby. Nothing like testing responsive in actual devices.</p>
            </article>
        </div>
        <div class="tagged__tag tagged__tag--notebook">
            <a class="tagged__tag__button" role="button" tabindex="0" aria-hidden="true"></a>
            <article class="tagged__tag__content">
            <h3 class="tagged__tag__title">Notepad</h3>
            <p class="tagged__tag__text">Because sometimes ideas flow better on paper.</p>
            </article>
        </div>
        <div class="tagged__tag tagged__tag--books">
            <a class="tagged__tag__button" role="button" tabindex="0" aria-hidden="true"></a>
            <article class="tagged__tag__content">
            <h3 class="tagged__tag__title">Technical books</h3>
            <p class="tagged__tag__text">Because sometimes ideas flow better on paper.</p>
            </article>
        </div>
        <svg width="0" height="0">
            <defs>
            <clipPath id="clipTagClosed">
                <polygon points="0 0,0 0,0 0,0 0,0 0,0 0">
                </polygon>
            </clipPath>
            <clipPath id="clipTagOpen">
                <polygon points="0 350,350 350,350 0,30 0,30 30,0 30">
                </polygon>
            </clipPath>
            </defs>
        </svg>
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

export default connect(mapStateToProps, null)(Table);