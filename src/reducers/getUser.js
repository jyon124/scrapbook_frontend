export default function geUser(state=[], action){
    switch(action.type){
        case 'FETCH_USER':
            return action.getUser.user
        case 'CLEAR_ALL_STATE':
            return state = []
        default:
            return state;
    }
}