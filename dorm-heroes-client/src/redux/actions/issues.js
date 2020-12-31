import {
    FETCH_ISSUES_REQUEST,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_FAILURE,
  } from "redux/constants";
  
  export const fetchIssues = () => {
    return {
      type: FETCH_ISSUES_REQUEST
    };
  };
  
  export const setIssues = issues => {
    return {
      type: FETCH_ISSUES_SUCCESS,
      issues: issues
    };
  };
  
  export const setIssuesError = resError => {
    return {
      type: FETCH_ISSUES_FAILURE,
      error: resError
    };
  };
  
  