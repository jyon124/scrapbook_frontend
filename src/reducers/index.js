import { combineReducers } from 'redux';
import news from './news';
import loader from './loader';
import showNews from './showNews'
import getUser from './getUser'
import scrapbookContainer from './scrapbookContainer'
import allScrapbooknews from './allScrapbooknews'



export default combineReducers({
    news,
    loader,
    showNews,
    getUser,
    scrapbookContainer,
    allScrapbooknews
})