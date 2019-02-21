import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  USERADMIN_DO_REGISTER_BEGIN,
  USERADMIN_DO_REGISTER_SUCCESS,
  USERADMIN_DO_REGISTER_FAILURE,
  USERADMIN_DO_REGISTER_DISMISS_ERROR,
} from './constants';
import {doRegisterAdmin} from '../../theutils/api';

export function doRegister(obj) {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: USERADMIN_DO_REGISTER_BEGIN,
    data:obj,
  };
}

export function dismissDoRegisterError() {
  return {
    type: USERADMIN_DO_REGISTER_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on USERADMIN_DO_REGISTER_BEGIN actions
export function* doDoRegister(action) {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    
    res=yield call(doRegisterAdmin,action.data);
  } catch (err) {
    yield put({
      type: USERADMIN_DO_REGISTER_FAILURE,
      data: { error: err },
    });
    return;
  }
  let jsonresponse=yield res.data;
  // Dispatch success action out of try/catch so that render errors are not catched.
  if(jsonresponse._id!=null){
    yield put({
      type: USERADMIN_DO_REGISTER_SUCCESS,
      data: jsonresponse,
    });
  }else{
    yield put({
      type: USERADMIN_DO_REGISTER_FAILURE,
      data: { error: 'Register Failed' },
    });
  }
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchDoRegister() {
  yield takeLatest(USERADMIN_DO_REGISTER_BEGIN, doDoRegister);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case USERADMIN_DO_REGISTER_BEGIN:
      return {
        ...state,
        doRegisterPending: true,
        doRegisterError: null,
        doRegisterData:action.data,
      };

    case USERADMIN_DO_REGISTER_SUCCESS:
      return {
        ...state,
        doRegisterPending: false,
        doRegisterError: null,
        adminuser:action.data,
      };

    case USERADMIN_DO_REGISTER_FAILURE:
      return {
        ...state,
        doRegisterPending: false,
        doRegisterError: action.data.error,
      };

    case USERADMIN_DO_REGISTER_DISMISS_ERROR:
      return {
        ...state,
        doRegisterError: null,
      };

    default:
      return state;
  }
}
