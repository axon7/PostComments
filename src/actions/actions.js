export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const URL =
  "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts";

export const fetchPending = () => ({
  type: FETCH_PENDING
});

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

export const fetchPosts = () => async dispatch => {
  try {
    await dispatch(fetchPending());
    const res = await fetch(URL);
    const posts = await res.json();
    console.log(posts);
    await dispatch(fetchSuccess(posts));
  } catch (error) {
    await dispatch(fetchFailure(error));
  }
};
