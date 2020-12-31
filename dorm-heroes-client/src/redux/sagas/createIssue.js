import { CREATE_NEW_ISSUE, HOST_ENV } from "redux/constants";
import { createNewIssueResponse } from "redux/actions/createIssue";
import { takeLatest, call, put, delay } from "redux-saga/effects";

const URL = `${HOST_ENV}/api/issues/`;
const DELAY = 1000;
const TIME_OUT = 3000;
const SUCCESSFUL_CREATION_MESSAGE = "Issue successfully created!";
const METHOD_TYPE = "POST";
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
    "Currently we have a problem in our server! We are already working on it and the problem will be solved soon."
};

const createIssueApiCall = issue => {
  const promisesList = [
    fetch(URL, {
      method: METHOD_TYPE,
      headers: HEADERS,
      body: JSON.stringify(issue)
    }),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(TIME_OUT_RESPONSE), TIME_OUT)
    )
  ];

  return Promise.race(promisesList).then(res => {
    if ((res.status >= 200 && res.status < 300) || res.status === 503) {
      return res;
    }
    return res.json();
  });
};

const createIssueFlow = function* createIssueFlow(action) {
  const { issue } = action;
  try {
    const res = yield call(createIssueApiCall, issue);
    if (res.status >= 200 && res.status < 300) {
      yield delay(DELAY);
      yield put(
        createNewIssueResponse({
          status: res.status,
          message: SUCCESSFUL_CREATION_MESSAGE
        })
      );
    } else if (res.status === 503) {
      yield delay(DELAY);
      yield put(createNewIssueResponse(SERVER_DOWN_ERROR));
    } else {
      yield delay(DELAY);
      yield put(
        createNewIssueResponse({
          status: res.status,
          message: res.errors ? res.errors[0].defaultMessage : res.message
        })
      );
    }
  } catch (error) {
    yield put(createNewIssueResponse(error));
  }
};

const createIssueWatcher = function* createIssueWatcher() {
  yield takeLatest(CREATE_NEW_ISSUE, createIssueFlow);
};

export default createIssueWatcher;
