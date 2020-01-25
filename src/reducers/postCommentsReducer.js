import {
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  SEARCH_BY_TITLE,
  FETCH_PENDING
} from "../actions/actions";

const initialState = {
  posts: [],
  filteredPosts: [],
  comments: [],
  error: ""
};
const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        filteredPosts: action.payload
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload
      };
    case SEARCH_BY_TITLE:
      return {
        ...state,
        filteredPosts: action.payload.filteredPosts
      };
    default:
      return state;
  }
};

export default postCommentsReducer;
