export default function loader(state = false, action){
    switch(action.type){
        case 'LOADING':
            return true
        case 'FETCH_NEWS_SUCCESS':
            return false
        default:
            return state;
    }
}