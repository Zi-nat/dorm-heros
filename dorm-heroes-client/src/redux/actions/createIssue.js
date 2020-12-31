import {CREATE_NEW_ISSUE, CREATE_NEW_ISSUE_RESPONSE, SET_ISSUE} from 'redux/constants';

export const createNewIssue = issue => ({
    type: CREATE_NEW_ISSUE,
    issue,
});

export const createNewIssueResponse = res => ({
    type: CREATE_NEW_ISSUE_RESPONSE,
    res,
});

export const setIssue = () => ({
    type: SET_ISSUE,
})