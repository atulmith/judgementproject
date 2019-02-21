// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ,
} from './constants';

export function updatelistofcasesobj(casesfilter) {
  return {
    type: SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ,
    data:casesfilter
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ:
      return {
        ...state,
        listofcasesData:action.data
      };

    default:
      return state;
  }
}
