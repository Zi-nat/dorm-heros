import { FETCH_ISSUES_REQUEST, HOST_ENV } from "redux/constants";
import { setIssues, setIssuesError } from "redux/actions/issues";
import { takeLatest, call, put } from "redux-saga/effects";

const URL = `${HOST_ENV}/api/issues/`;
const TIME_OUT = 10000;
const METHOD_TYPE = "GET";
const HEADERS = {
  "Content-type": "application/json"
};
const TIME_OUT_RESPONSE = {
  status: 408,
  message:
    "We couldn't reach the server! Please make sure you have internet and try again."
};

const SERVER_DOWN_ERROR = {
  status: 503,
  message:
    "Currently we have a problem in our server! We already working on it and the problem will be solved soon."
};

const issuesApiCall = () => {
  const promisesList = [
    fetch(URL, {
      method: METHOD_TYPE,
      headers: HEADERS
    }),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(TIME_OUT_RESPONSE), TIME_OUT)
    )
  ];

  return Promise.race(promisesList).then(res => {
    if (res.status === 503) {
      return res;
    }
    return res.json();
  });
};

const fetchIssuesFlow = function* fetchIssuesFlow() {
  try {
    const res = yield call(issuesApiCall);
    if (res.status === 503) {
      yield put(setIssuesError(SERVER_DOWN_ERROR));
    } else if (res.errors || res.message) {
      yield put(
        setIssuesError({
          message: res.errors ? res.errors[0].defaultMessage : res.message
        })
      );
    } else {
      yield put(setIssues(res));
    }
  } catch (error) {
    yield put(setIssuesError(error));
  }
};

const issuesWatcher = function* issuesWatcher() {
  yield takeLatest(FETCH_ISSUES_REQUEST, fetchIssuesFlow);
};

export default issuesWatcher;
