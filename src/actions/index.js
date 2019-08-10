import { FETCH_NEWS } from './types';
import Api from '../services/Api.js'


export function fetchNews(){
    return function (dispatch){
        dispatch({type: "LOADING"})
        Api.fetchNews()
        .then(data => {
            console.log(data)
            // Put into Store so they have access to news info
            dispatch({type:"LOADING", news: data.news})
        })
    };
}
