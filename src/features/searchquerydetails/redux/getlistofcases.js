import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import {fetchAllCases} from '../../theutils/api';

import {
  SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN,
  SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS,
  SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE,
  SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR,
} from './constants';

export function getlistofcases() {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN,
  };
}

export function dismissGetlistofcasesError() {
  return {
    type: SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN actions
export function* doGetlistofcases() {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    res=yield call(fetchAllCases);
    console.log('doGetlistofcases=',res);
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    // res = yield call(delay, 20);
  } catch (err) {
    yield put({
      type: SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE,
      data: { error: err },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  // if(res.ok){
    let jsonresponse=yield res.data;
    yield put({
      type: SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS,
      data: jsonresponse,
    });
  // }
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchGetlistofcases() {
  yield takeLatest(SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN, doGetlistofcases);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN:
      return {
        ...state,
        getlistofcasesPending: true,
        getlistofcasesError: null,
      };

    case SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS:
      return {
        ...state,
        getlistofcasesPending: false,
        getlistofcasesError: null,
        listofcasesData:action.data,
      };

    case SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE:
      return {
        ...state,
        getlistofcasesPending: false,
        getlistofcasesError: action.data.error,
      };

    case SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR:
      return {
        ...state,
        getlistofcasesError: null,
      };

    default:
      return state;
  }
}
