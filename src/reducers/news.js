export default function news(state=[], action){
    switch(action.type){
        case 'FETCH_NEWS_SUCCESS':
            return state.concat([...action.news])
        case 'LOADING':
            console.log('LOADING')
            return state;
        default:
            return state;
    }
}