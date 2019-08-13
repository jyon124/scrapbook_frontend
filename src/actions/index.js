import { FETCH_NEWS, SHOW_NEWS, FETCH_USER, FETCH_SCRAPBOOK } from './types';
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
            console.log(scrapbook, "Check Scrapbook Container Creation")
            dispatch({ type: FETCH_SCRAPBOOK, scrapbookContainer: scrapbook})
        })
    }
}