import { FETCH_NEWS } from './types';
import Api from '../services/Api.js'

export function fetchNews(){

    return function (dispatch){
        dispatch({type: "LOADING"})
        Api.fetchNews()
        .then(news => {
            console.log(news, "News")
            // Put into Store so they have access to news info
            dispatch({type: 'FETCH_NEWS_SUCCESS', news: news})
        })
    };
    
}
