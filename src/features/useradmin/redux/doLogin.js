import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  USERADMIN_DO_LOGIN_BEGIN,
  USERADMIN_DO_LOGIN_SUCCESS,
  USERADMIN_DO_LOGIN_FAILURE,
  USERADMIN_DO_LOGIN_DISMISS_ERROR,
} from './constants';
import {doLoginAdmin} from '../../theutils/api';

export function doLogin(obj) {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: USERADMIN_DO_LOGIN_BEGIN,
    data:obj,
  };
}

export function dismissDoLoginError() {
  return {
    type: USERADMIN_DO_LOGIN_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on USERADMIN_DO_LOGIN_BEGIN actions
export function* doDoLogin(action) {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res=yield call(doLoginAdmin,action.data);
  } catch (err) {
    let servererror=yield err.response.data.message;
    yield put({
      type: USERADMIN_DO_LOGIN_FAILURE,
      data: { error: servererror },
    });
    return;
  }
  let jsonresponse=yield res.data;
  // Dispatch success action out of try/catch so that render errors are not catched.
  if(jsonresponse._id!=null){
    yield put({
      type: USERADMIN_DO_LOGIN_SUCCESS,
      data: jsonresponse,
    });
  }else{
    yield put({
      type: USERADMIN_DO_LOGIN_FAILURE,
      data: { error: 'Login Error' },
    });
  }
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchDoLogin() {
  yield takeLatest(USERADMIN_DO_LOGIN_BEGIN, doDoLogin);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case USERADMIN_DO_LOGIN_BEGIN:
      return {
        ...state,
        doLoginPending: true,
        doLoginError: null,
      };

    case USERADMIN_DO_LOGIN_SUCCESS:
      return {
        ...state,
        doLoginPending: false,
        doLoginError: null,
        adminuser:action.data,
      };

    case USERADMIN_DO_LOGIN_FAILURE:
      return {
        ...state,
        doLoginPending: false,
        doLoginError: action.data.error,
      };

    case USERADMIN_DO_LOGIN_DISMISS_ERROR:
      return {
        ...state,
        doLoginError: null,
      };

    default:
      return state;
  }
}
