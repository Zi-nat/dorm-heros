import {
  FETCH_DISTURBANCE_TYPES_REQUEST,
  FETCH_DISTURBANCE_TYPES_SUCCESS,
  FETCH_DISTURBANCE_TYPES_FAILURE,
  SET_CURRENT_DISTURBANCE_TYPE,
  INITIAL_STATE
} from "redux/constants";

export const fetchDisturbanceTypes = () => {
  return {
    type: FETCH_DISTURBANCE_TYPES_REQUEST
  };
};

export const setFetchedDisturbanceTypes = distTypes => {
  return {
    type: FETCH_DISTURBANCE_TYPES_SUCCESS,
    payload: distTypes
  };
};

export const setDisturbanceTypesError = res => {
  return {
    type: FETCH_DISTURBANCE_TYPES_FAILURE,
    payload: res
  };
};

export const setCurrentDisturbanceType = currentType => {
  return {
    type: SET_CURRENT_DISTURBANCE_TYPE,
    disturbanceType: currentType
  };
};

export const setInitialState = () => {
  return {
    type: INITIAL_STATE,
  };
};
