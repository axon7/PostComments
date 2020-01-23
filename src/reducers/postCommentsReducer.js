import {
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  SEARCH_BY_TITLE
} from "../actions/actions";

const initialState = {
  posts: [],
  error: "",
  comments: [],
  searchTerm: "",
  filteredPosts: []
};
const postCommentsReducer = (state = initialState, action) => {
  // const filteredPosts = searchTerm =>
  //   [...state.posts].filter(item => {
  //     return item.title.indexOf(searchTerm) > -1;
  //   });

  switch (action.type) {
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
