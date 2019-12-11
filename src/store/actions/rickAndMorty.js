import axios from "axios";

export const GET_CHARS_START = "GET_CHARS_START";
export const GET_CHARS_SUCCESS = "GET_CHARS_SUCCESS";
export const GET_CHARS_FAILURE = "GET_CHARS_FAILURE";

export const getChars = () => dispatch => {
  dispatch({ type: GET_CHARS_START });
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      dispatch({
        type: GET_CHARS_SUCCESS,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({ type: GET_CHARS_FAILURE, payload: err.message });
    });
};

export const GET_CHAR_ID_START = "GET_CHAR_ID_START";
export const GET_CHAR_ID_SUCCESS = "GET_CHAR_ID_SUCCESS";
export const GET_CHAR_ID_FAILURE = "GET_CHAR_ID_FAILURE";

export const getCharById = char_id => dispatch => {
  dispatch({ type: GET_CHAR_ID_START });
  axios
    .get(`https://rickandmortyapi.com/api/character/${char_id}`)
    .then(res => {
      dispatch({ type: GET_CHAR_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_CHAR_ID_FAILURE, payload: err.message });
    });
};
