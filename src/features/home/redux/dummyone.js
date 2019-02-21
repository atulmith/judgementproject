import { delay} from 'redux-saga';
import { call, put, takeLatest  } from 'redux-saga/effects';
import {
  HOME_DUMMYONE_BEGIN,
  HOME_DUMMYONE_SUCCESS,
  HOME_DUMMYONE_FAILURE,
  HOME_DUMMYONE_DISMISS_ERROR,
} from './constants';

export function dummyone() {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: HOME_DUMMYONE_BEGIN,
  };
}

export function dismissDummyoneError() {
  return {
    type: HOME_DUMMYONE_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on HOME_DUMMYONE_BEGIN actions
export function* doDummyone() {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res = yield call(delay, 20);
  } catch (err) {
    yield put({
      type: HOME_DUMMYONE_FAILURE,
      data: { error: err },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: HOME_DUMMYONE_SUCCESS,
    data: res,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchDummyone() {
  yield takeLatest(HOME_DUMMYONE_BEGIN, doDummyone);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case HOME_DUMMYONE_BEGIN:
      return {
        ...state,
        dummyonePending: true,
        dummyoneError: null,
      };

    case HOME_DUMMYONE_SUCCESS:
      return {
        ...state,
        dummyonePending: false,
        dummyoneError: null,
      };

    case HOME_DUMMYONE_FAILURE:
      return {
        ...state,
        dummyonePending: false,
        dummyoneError: action.data.error,
      };

    case HOME_DUMMYONE_DISMISS_ERROR:
      return {
        ...state,
        dummyoneError: null,
      };

    default:
      return state;
  }
}
