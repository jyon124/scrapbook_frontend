import React from 'react';

class NewsCard extends React.Component {

render(){
    return(
<section className="newsCards">
  <article className="card">
    <img className="newsImg" src={this.props.news.urlToImage} />
    <div className="card__info">
      <span className="card__category">{this.props.news.category}</span>
      <h3 className="card__title">{this.props.news.title}</h3>
       <span className="card__by">
         <a href="#" className="card__link" title="author">View Full Coverage</a>
      </span>
    </div>
  </article>
</section>
    )
    }
}
export default NewsCard;