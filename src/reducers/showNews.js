import {SHOW_NEWS} from '../actions/types'
export default function showNews(state = {}, action) {
  switch (action.type) {
    case SHOW_NEWS:
      return action.oneNews
    case 'CLEAR_ALL_STATE':
      return state = []
    default:
      return state;
  }
}