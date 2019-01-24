import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    const articles = state.articles.concat(action.payload);
    return Object.assign({}, state, { articles });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;
