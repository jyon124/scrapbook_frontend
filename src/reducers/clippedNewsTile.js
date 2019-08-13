export default function clippedNewsTile(state = [], action){
    switch(action.type){
        case 'CLIPPED_NEWS_TILE':
            return action.clippedNewsTile
        case 'CLEAR_ALL_STATE':
                return state = []
        default:
            return state;
    }
}

