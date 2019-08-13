export default function clipNews(state=[], action){
    switch(action.type){
        case 'CLIP_NEWS':
            return [...state, action.clippedNews]
        default:
            return state;
    }
}

