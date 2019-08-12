import { FETCH_NEWS, SHOW_NEWS } from './types';
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