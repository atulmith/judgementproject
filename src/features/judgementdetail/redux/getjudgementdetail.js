import { delay} from 'redux-saga';
import { call, put, takeLatest  } from 'redux-saga/effects';
import {fetchOneCase} from '../../theutils/api';
import {
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN,
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS,
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE,
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR,
} from './constants';

export function getjudgementdetail(caseid) {
  // If need to pass args to saga, pass it with the begin action.
  // alert('begin '+caseid);
  return {
    type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN,
    caseid:caseid,
  };
}

export function dismissGetjudgementdetailError() {
  return {
    type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN actions
export function* doGetjudgementdetail(action) {
  console.log('inside saga ',action);
  // alert('inside saga doGetjudgmentdetail '+action.caseid);
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res=yield call(fetchOneCase,action.caseid);
    // res = yield call(delay, 20);
  } catch (err) {
    yield put({
      type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE,
      data: { error: err },
    });
    return;
  }
  let jsonresponse=res.data;
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS,
    data: jsonresponse,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchGetjudgementdetail() {
  yield takeLatest(JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN, doGetjudgementdetail);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN:
      return {
        ...state,
        getjudgementdetailPending: true,
        getjudgementdetailError: null,
      };

    case JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS:
      return {
        ...state,
        getjudgementdetailPending: false,
        getjudgementdetailError: null,
        getjudgementdetailData:action.data,
      };

    case JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE:
      return {
        ...state,
        getjudgementdetailPending: false,
        getjudgementdetailError: action.data.error,
      };

    case JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR:
      return {
        ...state,
        getjudgementdetailError: null,
      };

    default:
      return state;
  }
}
