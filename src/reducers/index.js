import { combineReducers } from 'redux';
import news from './news';
import loader from './loader';


export default combineReducers({
    news,
    loader
})