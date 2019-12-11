import {
  GET_CHARS_FAILURE,
  GET_CHARS_START,
  GET_CHARS_SUCCESS,
  GET_CHAR_ID_FAILURE,
  GET_CHAR_ID_START,
  GET_CHAR_ID_SUCCESS
} from "../actions/rickAndMorty";

const initialState = {
  getting: false,
  got: false,
  error: "",
  chars: [],
  char: []
};

export const rickAndMorty = (state = initialState, action) => {
  switch (action.type) {
    // Get All Characters
    case GET_CHARS_START:
      return {
        ...state,
        getting: true,
        error: ""
      };

    case GET_CHARS_SUCCESS:
      return {
        ...state,
        getting: false,
        got: true,
        chars: action.payload,
        error: ""
      };

    case GET_CHARS_FAILURE:
      return {
        ...state,
        getting: false,
        error: action.payload
      };

    // Get Character by ID
    case GET_CHAR_ID_START:
      return {
        ...state,
        getting: true,
        error: ""
      };

    case GET_CHAR_ID_SUCCESS:
      return {
        ...state,
        getting: false,
        got: true,
        char: action.payload,
        error: ""
      };

    case GET_CHAR_ID_FAILURE:
      return {
        ...state,
        getting: false,
        error: action.payload
      };
    default:
      return state;
  }
};
