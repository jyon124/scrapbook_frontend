export default function scrapbookContainer(state=[], action){
    switch(action.type){
        case 'FETCH_SCRAPBOOK':
            return action.scrapbookContainer
        default:
            return state;
    }
}