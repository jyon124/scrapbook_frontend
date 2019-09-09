import React, { Component } from 'react';
import Api from '../services/Api';
import {connect} from 'react-redux';
import { showNews, fetchUser, fetchScrapbook, postClip, removeTile, fetchAllScrapbooknewsAction, deleteNoteReq, clearAllScrapbooknewsState } from '../actions';

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
            this.props.history.push('/login')
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
        li.className = 'single-note';
        const btn = document.createElement('button');
        btn.className = 'delete-note'
        btn.innerText = '📍';
        btn.addEventListener('click', (e)=> this.handleDeleteNote(e, note.id));
        li.innerText = note.content;
        li.append(btn);
        noteUl.append(li);
        // this.props.clearScrapbooknewsState();
        // Show more and less has to be available without refresh.
    }

    handleDisplayNote = (e, note) => {
        if (e.target.parentNode.style.overflow === "visible"){
            e.target.parentNode.style.overflow = "hidden";
            e.target.parentNode.style.height = "160px";
            e.target.innerText = "[・・・]"
        }else {
        e.target.parentNode.style.overflow = "visible";
        e.target.parentNode.style.height = "auto";
        e.target.innerText = "↻"
        }
    }

    // ✄ delete btn 
    handleShowMore = (note) => {
        if (note.content.length > 120){
            return <div key={note.id} className="single-note"><button className='delete-note' onClick={(e) => this.handleDeleteNote(e, note.id)}><span role="img" aria-label="redClip">📍</span></button>
              <button className="display-btn" onClick={(e) => this.handleDisplayNote(e, note)}>
                [・・・]
              </button>
                {note.content}
            </div>
        } else {
            return <li key={note.id} className="single-note"><button className='delete-note' onClick={(e) => this.handleDeleteNote(e, note.id)}><span role="img" aria-label="redClip">📍</span></button>{note.content}</li>
        }
    }

    handleRenderNotes = () => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        if (scrapbooknews.notes !== undefined){
        return scrapbooknews.notes.map(note => {
            return this.handleShowMore(note)
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
        if(e.target.value === '-------'){
            this.setState({
                color: 'white'
            })
        } else {
        this.setState({
            color: e.target.value
        })
      }
    }

    getSelection(content){
        this.setState({
            selectedSentence: window.getSelection().toString()
        })
    }

    handleSaveHighlight = (e, content) => {
        e.preventDefault();
        if(!this.state.selectedSentence){
            alert('Please select sentences.');
        } else if(this.state.selectedSentence.length < 3){
            alert('Please select sentences longer than 3 characters.');
        } else if (!this.state.color) {
            alert('Please select the color.');
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
        // .then(highlighted => {console.log(highlighted)})
        
        setTimeout(() => {
            this.props.clearScrapbooknewsState();
            this.setState({
                selectedSentence: '',
                color: ''
            });
        }, 500);
    }

    handleRenderHighlights = (content) => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id})
        let myContent = content;
        if (scrapbooknews.highlights.length > 0){
        scrapbooknews.highlights.forEach(highlight => {
           myContent = this.handleApplySpan(highlight, myContent);
        })
        let p = document.querySelector('.please');
        if(p){
        setTimeout(()=> {p.innerHTML = `${myContent}`}, 200);
        }
       } else {
           return scrapbooknews.news.content
       }
    }

    handleApplySpan(highlight, content){
        if(content){
        // let failCount = 0;
        let highlightSplit = highlight.sentence.split('');
        let contentSplit = content.split('');
        let start = 0;
        let last = 0;
        for (let i = 0, j = 0; i < contentSplit.length-1; i++){
          if (highlightSplit[j] === content[i]){
            j++;
            start = i;
          } else {
            // let j = 0;
            start = 0;
          }
          if (highlightSplit.length === j){
            last = i+2;
            start = last-j-1;
            let p = document.querySelector('.please');
            if(p !== null){
                contentSplit.splice(start, 0, `<span style="background-color: rgba(222,255,0,0.75)">`)
                contentSplit.splice(last, 0, '</span>')
                content = contentSplit.join('')
                return content
            } else {
                // failCount += 1;
                // console.log('p finding fail count:', failCount, p)
            }
          }
        }
      }
    }

    renderHighlightTag = () => {
        const scrapbooknews = this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id});
        return scrapbooknews.highlights.map(highlight => {
            const tag = highlight.sentence.split(' ').splice(0, 3).join(' ');
            return <li key={highlight.id}>{tag}...<button className="del-btn-highlight" onClick={(e) => this.handleDeleteHighlight(e, highlight)}><img alt="eraser" className="eraser" src="https://png.pngtree.com/svg/20150903/eraser_1320087.png"/></button><br/></li>
        })
    }

    handleDeleteHighlight = (e, highlight) => {
        e.target.parentNode.remove();
        Api.handleDeleteHighlightReq(highlight.id)
        setTimeout(() => {
            this.props.clearScrapbooknewsState();
        }, 500);
    }
    
    render(){
        return (
            <div className="scrapbooknews-display">
                <div id="book-wrapper">
                {this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null}
                {this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null}
                    <div id="container">
                        <section className="open-book">

                            <header>
                                <h1>{this.props.showNews.category}</h1>
                                <h6>{this.props.getUser.name}</h6>
                            </header>

                            <article>
                            <h2 className="chapter-title">{this.props.showNews.title}</h2>
                            <img className="scrapbooknews-img" src={this.props.showNews.urlToImage} alt="news display" /><br/>
                            <button className="unsave-btn" onClick={() => this.handleUnfavorite(this.props.showNews.id, this.props.scrapbookContainer.id)}><img alt="garbageCan" className="delete-saved-show-btn" src="https://png.pngtree.com/svg/20161124/delete_26855.png" /></button><br/><br/>
                            {
                            this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                            <p className="please" onMouseUp={() => this.getSelection()}>
                                {this.handleRenderHighlights(this.props.showNews.content)}
                            </p>
                            :
                            <p className="please" onMouseUp={() => this.getSelection()}>
                            {this.props.showNews.content}
                            </p>
                            }

                            {this.props.showNews.author === null ? null : <h2 className="author">by {this.props.showNews.author}</h2>}

                            <dl>
                                <dd>
                                <em className="selected-title">Selected Sentence:</em><br/>
                                <form onSubmit={(e) => this.handleSaveHighlight(e, this.props.showNews.content)}>
                                    <label htmlFor="highlight">color: </label>
                                    <select onChange={(e) => this.colorChange(e)} value={this.state.color}>
                                        <option defaultValue="none">-------</option>
                                        <option value="greenyellow">Greenyellow</option>
                                    </select>
                                    <br/>
                                    <input className="submit-highlight-btn" type="submit" value="Save Selected Highlight" />
                                </form>
                                <h4 style={{'backgroundColor':`${this.state.color}`}}>{this.state.selectedSentence}</h4>
                                </dd>

                                <dd className="highlight-menu-container">
                                    <em className="selected-title">Highlighted Sentence:</em>
                                    {
                                    this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                                    <div className="highlight-tag-container">
                                        {this.renderHighlightTag()}
                                    </div>
                                    :
                                    null
                                    }
                                </dd>
                            </dl>
                            </article>

                            <footer>
                                <ol id="page-numbers">
                                    <li>1</li>
                                    <li>2</li>
                                </ol>
                            </footer>

                        </section>
                    </div>
                </div>
                
                <div className="note-container">
                    <form className="notes-form" onSubmit={(e) => {this.handlePostNotes(e)}}>
                        <label className="note-label">Take a notes: </label><br/>
                        ​<textarea className="note-input-feild" id="txtArea" rows="10" cols="31" onChange={(e) => this.handleNotesChange(e)} value={this.state.content}></textarea>
                        <br/>
                        <input className="submit-note" type="submit" value="Submit"/>
                    </form>
                    {
                    this.props.allScrapbooknews.find(news => {return news.news_id === this.props.showNews.id}) !== undefined ? 
                    <ul id="notes" className="notes">
                        {this.handleRenderNotes()}
                    </ul>
                    : 
                    null
                    }
                </div>

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
        },
        clearScrapbooknewsState: () => {
          dispatch(clearAllScrapbooknewsState())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);