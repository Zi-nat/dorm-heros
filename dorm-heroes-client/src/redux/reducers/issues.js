import {
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAILURE
} from "redux/constants";

const initialState = {
  issues: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_ISSUES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        issues: action.issues,
        error: null
      };
    }
    case FETCH_ISSUES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
