import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {doSearchCases} from '../../theutils/api';
import {
  SEARCHFILTER_SEARCHCASES_BEGIN,
  SEARCHFILTER_SEARCHCASES_SUCCESS,
  SEARCHFILTER_SEARCHCASES_FAILURE,
  SEARCHFILTER_SEARCHCASES_DISMISS_ERROR,
} from './constants';
import {SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ} from '../../searchquerydetails/redux/constants';

export function searchcases(obj) {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: SEARCHFILTER_SEARCHCASES_BEGIN,
    data:obj
  };
}

export function dismissSearchcasesError() {
  return {
    type: SEARCHFILTER_SEARCHCASES_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on SEARCHFILTER_SEARCHCASES_BEGIN actions
export function* doSearchcases(action) {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call for 
    res=yield call(doSearchCases,action.data);
  } catch (err) {
    yield put({
      type: SEARCHFILTER_SEARCHCASES_FAILURE,
      data: { error: err },
    });
    return;
  }
  let jsonresponse=yield res.data;
  console.log('res=',jsonresponse);
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: SEARCHFILTER_SEARCHCASES_SUCCESS,
    data: jsonresponse,
  });
  yield put({
    type:SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ,
    data:jsonresponse,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchSearchcases() {
  yield takeLatest(SEARCHFILTER_SEARCHCASES_BEGIN, doSearchcases);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case SEARCHFILTER_SEARCHCASES_BEGIN:
      return {
        ...state,
        searchcasesPending: true,
        searchcasesError: null,
      };

    case SEARCHFILTER_SEARCHCASES_SUCCESS:
      return {
        ...state,
        searchcasesPending: false,
        searchcasesError: null,
        searchcasesData:action.data,
      };

    case SEARCHFILTER_SEARCHCASES_FAILURE:
      return {
        ...state,
        searchcasesPending: false,
        searchcasesError: action.data.error,
      };

    case SEARCHFILTER_SEARCHCASES_DISMISS_ERROR:
      return {
        ...state,
        searchcasesError: null,
      };

    default:
      return state;
  }
}
