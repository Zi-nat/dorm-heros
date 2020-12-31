import { FETCH_DISTURBANCE_TYPES_REQUEST, HOST_ENV } from "redux/constants";
import {
  setFetchedDisturbanceTypes,
  setDisturbanceTypesError
} from "redux/actions/disturbanceType";
import { takeLatest, call, put } from "redux-saga/effects";

const URL = `${HOST_ENV}/api/disturbanceType/`;
const TIME_OUT = 6000;
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

const disturbanceTypesApiCall = () => {
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

const fetchDisturbanceTypesFlow = function* fetchDisturbanceTypesFlow() {
  try {
    const res = yield call(disturbanceTypesApiCall);
    if (res.status === 503) {
      yield put(setDisturbanceTypesError(SERVER_DOWN_ERROR));
    }
    if (res.status < 200 || res.status > 300) {
      yield put(setDisturbanceTypesError(res));
    } else {
      yield put(
        setFetchedDisturbanceTypes({
          types: res
        })
      );
    }
  } catch (error) {
    yield put(setDisturbanceTypesError(error));
  }
};

const disturbanceTypeWatcher = function* disturbanceTypeWatcher() {
  yield takeLatest(FETCH_DISTURBANCE_TYPES_REQUEST, fetchDisturbanceTypesFlow);
};

export default disturbanceTypeWatcher;
