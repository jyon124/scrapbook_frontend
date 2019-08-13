import { FETCH_NEWS, SHOW_NEWS, FETCH_USER, FETCH_SCRAPBOOK, CLIP_NEWS, FETCHALLSCRAPBOOKTILE } from './types';
import Api from '../services/Api.js'

export function fetchNews(){
    return function (dispatch){
        dispatch({type: "LOADING"})
        Api.fetchNews()
        .then(news => {
            dispatch({type: FETCH_NEWS, news: news})
        })
    };
}

export function showNews(oneNews) {
    return {
      type: SHOW_NEWS,
      oneNews
    }
}

export function fetchUser(){
    return function (dispatch){
        Api.profile()
        .then(user => {
            dispatch({ type: FETCH_USER, getUser: user })
        })
    }
}

export function fetchScrapbook(id){
    return function(dispatch){
        Api.findOrCreateScrapBook(id)
        .then(scrapbook => {
            dispatch({ type: FETCH_SCRAPBOOK, scrapbookContainer: scrapbook})
        })
    }
}

export function postClip(newsId, scrapbookContainerId){
    return function (dispatch){
        Api.handleAddFavorite(newsId, scrapbookContainerId)
        .then(clippedNews => {
            dispatch({ type: CLIP_NEWS, clippedNews: clippedNews})
        })
    }
}

export function fetchAllScrapbooknewsAction(scrapbookId){
    return function (dispatch){
        Api.handleAllScrapbooknews(scrapbookId)
        .then(allScrapbooknews => {
            const filtered = allScrapbooknews.filter(news => news.scrapbook_id == scrapbookId)
            dispatch({type: FETCHALLSCRAPBOOKTILE, allScrapbooknews: filtered})
        })
    }
}