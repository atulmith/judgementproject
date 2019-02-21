import {
  SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ,
} from '../../../../src/features/searchquerydetails/redux/constants';

import {
  updatelistofcasesobj,
  reducer,
} from '../../../../src/features/searchquerydetails/redux/updatelistofcasesobj';

describe('searchquerydetails/redux/updatelistofcasesobj', () => {
  it('returns correct action by updatelistofcasesobj', () => {
    expect(updatelistofcasesobj()).toHaveProperty('type', SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ);
  });

  it('handles action type SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SEARCHQUERYDETAILS_UPDATELISTOFCASESOBJ }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
