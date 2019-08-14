export default function allScrapbooknews(state = [], action){
    switch(action.type){
        case 'FETCHALLSCRAPBOOKTILE':
            return action.allScrapbooknews
        case 'CLIP_NEWS':
                return [...state, action.allScrapbooknews]
        case 'REMOVE_TILE':
                return state.filter(news => news !== action.news)
        case 'CLEAR_ALL_STATE':
                return state = []
        default:
            return state;
    }
}

    //  return state.filter(portfolio => portfolio!==action.portfolio)
