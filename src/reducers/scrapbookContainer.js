export default function scrapbookContainer(state=[], action){
    switch(action.type){
        case 'FETCH_SCRAPBOOK':
            return action.scrapbookContainer
        case 'CLEAR_ALL_STATE':
            return state = []
        default:
            return state;
    }
}