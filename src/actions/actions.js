export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SEARCH_BY_TITLE = "SEARCH_BY_TITLE";

const corsproxy = "https://cors-anywhere.herokuapp.com/";

export const fetchPending = () => ({
  type: FETCH_PENDING
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

export const fetchPosts = () => async dispatch => {
  try {
    await dispatch(fetchPending());
    const res = await fetch(
      `${corsproxy}https://jsonplaceholder.typicode.com/posts`
    );
    const posts = await res.json();
    console.log(posts);
    await dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    await dispatch(fetchFailure(error));
  }
};

export const fetchCommentsSuccess = data => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data
});

export const fetchComments = id => async dispatch => {
  try {
    await dispatch(fetchPending());
    const res = await fetch(
      `${corsproxy}https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    const comments = await res.json();
    console.log(comments);
    await dispatch(fetchCommentsSuccess(comments));
  } catch (error) {
    await dispatch(fetchFailure(error));
  }
};

export const searchByTitle = (posts, searchTerm) => ({
  type: SEARCH_BY_TITLE,
  payload: {
    filteredPosts:
      searchTerm === ""
        ? posts
        : posts.filter(item => item.title.indexOf(searchTerm) > -1)
  }
});
