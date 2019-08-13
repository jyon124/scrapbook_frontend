export default function allScrapbooknews(state = [], action){
    switch(action.type){
        case 'FETCHALLSCRAPBOOKTILE':
            return action.allScrapbooknews
        case 'CLIP_NEWS':
                return [...state, action.allScrapbooknews]
        case 'CLEAR_ALL_STATE':
                return state = []
        default:
            return state;
    }
}

