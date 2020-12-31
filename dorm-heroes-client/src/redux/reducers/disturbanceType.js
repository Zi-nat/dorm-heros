import {
  FETCH_DISTURBANCE_TYPES_REQUEST,
  FETCH_DISTURBANCE_TYPES_SUCCESS,
  FETCH_DISTURBANCE_TYPES_FAILURE,
  SET_CURRENT_DISTURBANCE_TYPE,
  INITIAL_STATE
} from "redux/constants";

const initialState = {
  types: [],
  isLoading: false,
  response: {},
  currentType: "0",
  isErrorOccurred: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISTURBANCE_TYPES_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_DISTURBANCE_TYPES_SUCCESS: {
      return {
        ...state,
        types: action.payload.types,
        isLoading: false
      };
    }

    case FETCH_DISTURBANCE_TYPES_FAILURE: {
      return {
        response: action.payload,
        isLoading: false,
        isErrorOccurred: true
      };
    }

    case SET_CURRENT_DISTURBANCE_TYPE: {
      return {
        ...state,
        currentType: action.disturbanceType
      };
    }

    case INITIAL_STATE: {
      return {
        types: [],
        isLoading: false,
        response: {},
        currentType: "0",
        isErrorOccurred: false
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
