// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  USERADMIN_UPDATEADMINUSER,
} from './constants';

export function updateadminuser() {
  return {
    type: USERADMIN_UPDATEADMINUSER,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case USERADMIN_UPDATEADMINUSER:
      return {
        ...state,
        adminuser:null,
      };

    default:
      return state;
  }
}
