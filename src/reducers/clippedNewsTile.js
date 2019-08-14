export default function clippedNewsTile(state = [], action){
    switch(action.type){
        case 'CLIPPED_NEWS_TILE':
            return action.clippedNewsTile
        case 'REMOVE_TILE':
                return state.filter(news => news.id !== action.tileId)
        case 'CLEAR_ALL_STATE':
                return state = []
        default:
            return state;
    }
}

