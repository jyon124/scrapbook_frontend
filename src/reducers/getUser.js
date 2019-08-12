export default function geUser(state=[], action){
    switch(action.type){
        case 'FETCH_USER':
            return action.getUser.user
        default:
            return state;
    }
}