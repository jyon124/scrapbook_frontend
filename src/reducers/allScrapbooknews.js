export default function allScrapbooknews(state=[], action){
    switch(action.type){
        case 'FETCHALLSCRAPBOOKTILE':
            return [...state, ...action.allScrapbooknews]
        default:
            return state;
    }
}

