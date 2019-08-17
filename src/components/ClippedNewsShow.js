import React, { Component } from 'react';
import Api from '../services/Api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { showNews, fetchUser, fetchScrapbook, postClip, removeTile, fetchAllScrapbooknewsAction, deleteNoteReq } from '../actions';
import ReactDOM from 'react-dom';


class NewsShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            selectedSentence: '',
            color: ''
        }
    }

    componentDidMount(){
        if(!localStorage.getItem('user')){
            this.props.history.push('/')
        } else{
        this.getNews()
        this.getUserData()
        }
    }

    fetchNews = (id) => {
        Api.fetchOneNews(id)
        .then(news => {
            this.props.getShowNews(news)
        })
    }

    getNews = () => {
        const id = this.props.match.params.news_id
        if(Number(id)){
            this.fetchNews(id)
        } else {
            this.props.history.push('/scrapbooks')
        }
    }

    getUserData = () => {
        if(this.props.getUser.length < 1){
            this.props.getUserInfo()
        }
    }

    initializeScrapbook = (id) => {
        if(this.props.scrapbookContainer.length < 1){
        this.props.findScrapbook(id)
        }
    }

    handleUnfavorite = (newsId, scrapbookContainerId) => {
        const tile = this.props.allScrapbooknews.find(news => {return news.news_id === newsId})
        this.props.unSave(tile)
        this.props.history.push('/scrapbooks')
    }

    handleNotesChange(e){
        this.setState({
            content: e.target.value
        })
    }

    handlePostNotes(e){
        e.preventDefault();
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        const bodyObj = {
            content: this.state.content,
            scrapbooknews_id: scrapbooknews.id
        }
        Api.handlePostReqNote(bodyObj)
        .then(note => {
            this.handleRenderNewNote(note)
        })
        this.setState({content: ''})
    }

    handleRenderNewNote = (note) => {
        const noteUl = document.getElementById('notes');
        const li = document.createElement('li');
        li.className = 'single-note-content';
        const btn = document.createElement('button');
        btn.innerText = 'x';
        btn.addEventListener('click', (e)=> this.handleDeleteNote(e, note.id));
        li.innerText = note.content;
        li.append(btn);
        noteUl.append(li);
    }

    handleRenderNotes = () => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        if (scrapbooknews.notes !== undefined){
        return scrapbooknews.notes.map(note => {
            return <li key={note.id} className="single-note-content">{note.content}<button onClick={(e) => this.handleDeleteNote(e, note.id)}>x</button></li>
        })
       }
    }

    handleDeleteNote = (e, noteId) => {
        this.props.deleteNote(noteId)
        e.target.parentNode.remove();
    }

    getAllScrapbook = (scrapbookId) => {
        if(this.props.allScrapbooknews.length < 1){
        this.props.fetchAllScrapbooknews(scrapbookId)
        }
    }

    ////// HIGHLIGHT FUNCTION BELOW ///////

    colorChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    getSelection(content){
        this.setState({
            selectedSentence: window.getSelection().toString()
        })
    }

    handleSaveHighlight = (e, content) => {
        e.preventDefault();
        if(this.state.selectedSentence.length < 3){
            alert('Highlighted sentence has to be longer than three characters.')
        } else if(!this.state.selectedSentence && !this.state.color || this.state.color === 'none'){
            alert('Please Select the sentences and color')
        } else if (!this.state.color || this.state.color === 'none'){
            alert('Please Select the color')
        } else if (!this.state.selectedSentence){
            alert('Please Select the sentences')
        } else {
        this.handlePostHighlights(e);
        }
    }

    handlePostHighlights(e){
        e.preventDefault();
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        const bodyObj = {
            sentence: this.state.selectedSentence,
            scrapbooknews_id: scrapbooknews.id,
            color: this.state.color
        }
        Api.handlePostReqHighlight(bodyObj)
        .then(highlighted => {console.log(highlighted)})
        this.props.history.push('/scrapbooks')
    }

    handleRenderHighlights = (content) => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        if (scrapbooknews.highlights.length > 0){
        return scrapbooknews.highlights.map(highlight => {
            this.handleApplySpan(highlight, content);
            })
       } else {
           return scrapbooknews.news.content
       }
    }

    // Second Time or Initially applied Highlight in sentence.
    // If Saved sentence render faster than this function, it starts counting <span> as well so, 
    // highlight wrong spot.

    // and if user continuously apply highlight, it automatically remove first one and apply only last one.
    handleApplySpan(highlight, content){
        let highlightSplit = highlight.sentence.split('');
        let contentSplit = content.split('');
        let start = 0;
        let last = 0;
        for (let i = 0, j = 0; i < contentSplit.length-1; i++){
          if (highlightSplit[j] === content[i]){
            j++;
            start = i;
          } else {
            let j = 0;
            start = 0;
          }
          if (highlightSplit.length === j){
            last = i+2;
            start = last - highlightSplit.length-2;
            contentSplit.splice(start, 0, `<span style="color: red">`)
            contentSplit.splice(last, 0, '</span>')
            let joinedContent = contentSplit.join('')
            let p = document.querySelector('.content');
            console.log(joinedContent)
            if(p !== null){
                return setTimeout(()=> {p.innerHTML = `${joinedContent}`}, 300);
            }
          }
        }
    }

    contentExists = () => {
        const check = document.querySelector('.content');
        if (check !== null){
           const checkInner = check.innerText;
           return checkInner
        }
    }
    
    render(){
        return (
            <div className="scrapbooknews-display">
                {/* {this.contentExists() ? this.contentExists() : false} */}
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                <img className="scrapbooknews-img" src={this.props.showNews.urlToImage} alt="news display" />
                <br/>
                <button onClick={() => this.handleUnfavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}>UnSave</button>
                <div className="news-content">
                <h1>Title: {this.props.showNews.title}</h1>
                <h2>Category: {this.props.showNews.category}</h2>
                {this.props.showNews.author === null ? null : <h2>Author: {this.props.showNews.author}</h2>}
                <h3>Description: {this.props.showNews.description}</h3>

                {
                this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                <p className="content" onMouseUp={() => this.getSelection()}>
                    {this.handleRenderHighlights(this.props.showNews.content)}
                </p>
                :
                <p className="content" onMouseUp={() => this.getSelection()}>
                    {this.props.showNews.content}
                </p>
                }

                <h4>Published at: {this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null}</h4>
                <button onClick={()=> window.open(`${this.props.showNews.url}`, "_blank")}>Link to this news</button>
                <br/>
                <br/>

                <hr/>

                <form onSubmit={(e) => this.handleSaveHighlight(e, this.props.showNews.content)}>
                    <label htmlFor="highlight">Highlight: </label>
                    <select onChange={(e) => this.colorChange(e)} value={this.state.color}>
                        <option value="none">-------</option>
                        <option defaultValue="red">Red</option>
                    </select>
                        <br/>
                    <input type="submit" value="Save Selected Highlight" />
                </form>
                <h2>Selected Sentence: </h2>
                <h4 style={{'color':`${this.state.color}`}}>{this.state.selectedSentence}</h4>


                <br/>

                </div>
    
                <br/>

                <form className="notes-form" onSubmit={(e) => {this.handlePostNotes(e)}}>
                    <label>Notes: </label><br/>
                    ​<textarea id="txtArea" rows="10" cols="58" onChange={(e) => this.handleNotesChange(e)} value={this.state.content}></textarea>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                {
                this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                    <ul id="notes" className="note">
                        {this.handleRenderNotes()}
                    </ul>
                : 
                null
                }
            </div>
        )
      }
    }

const mapStateToProps = (state) => {
    return {
      news: state.news,
      showNews: state.showNews,
      getUser: state.getUser,
      scrapbookContainer: state.scrapbookContainer,
      allScrapbooknews: state.allScrapbooknews
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        getShowNews: (oneNews) => {
            dispatch(showNews(oneNews))
        },
        getUserInfo: () => {
            dispatch(fetchUser())
        },
        findScrapbook: (id) => {
            dispatch(fetchScrapbook(id))
        },
        clipNews: (newsId, scrapbookContainerId) => {
            dispatch(postClip(newsId, scrapbookContainerId))
        },
        unSave: (tile) => {
            dispatch(removeTile(tile))
        },
        fetchAllScrapbooknews: (scrapbookId) => {
            dispatch(fetchAllScrapbooknewsAction(scrapbookId))
        },
        deleteNote: (noteId) => {
            dispatch(deleteNoteReq(noteId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);