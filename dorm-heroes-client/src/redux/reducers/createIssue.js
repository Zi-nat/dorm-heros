import { CREATE_NEW_ISSUE, CREATE_NEW_ISSUE_RESPONSE, SET_ISSUE} from 'redux/constants';

const initialState = {
    issue: {},
    isLoading: false,
    res: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_ISSUE: {
            return {
                ...state,
                isLoading: true,
                issue: action.issue,
            };
        }
        case CREATE_NEW_ISSUE_RESPONSE: {
            return {
                ...state,
                issue: {},
                isLoading: false,
                res: action.res
            };
        }
        case SET_ISSUE : {
            return {
                ...state,
                issue: {}
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
};
