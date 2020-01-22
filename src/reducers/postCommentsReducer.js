import { FETCH_SUCCESS } from "../actions/actions";

const initialState = {
  posts: [],
  error: "",
  comments: []
};
const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default postCommentsReducer;
