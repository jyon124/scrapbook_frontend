import { combineReducers } from 'redux';
import news from './news';
import loader from './loader';
import showNews from './showNews'


export default combineReducers({
    news,
    loader,
    showNews
})