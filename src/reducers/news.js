export default function news(state=[], action){
    switch(action.type){
        case 'FETCH_NEWS_SUCCESS':
            return state.concat([...action.news])
        case 'CLEAR_ALL_NEWS_STATE':
            return state = []
        default:
            return state;
    }
}
