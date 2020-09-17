import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export const createPost = (post) => ({ type: CREATE_POST, payload: post });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export function showAlert(text) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}
export const hideAlert = () => ({ type: HIDE_ALERT });

export function fetchPosts() {
    return async (dispatch) => {
  try {
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());
    
  } catch (error) {
      dispatch(showAlert('что-то пошло тне так!'));
      dispatch(hideLoader());
  }
}}
