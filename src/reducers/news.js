export default function news(state=[], action){
    switch(action.type){
        case 'FETCH_NEWS_SUCCESS':
            return state.concat([...action.news])
        default:
            return state;
    }
}
