export default function allScrapbooknews(state = [], action){
    switch(action.type){
        case 'FETCHALLSCRAPBOOKTILE':
            return action.allScrapbooknews
        case 'CLIP_NEWS':
                return [...state, action.allScrapbooknews]
        default:
            return state;
    }
}

