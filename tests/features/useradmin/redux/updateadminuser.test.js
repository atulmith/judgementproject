import {
  USERADMIN_UPDATEADMINUSER,
} from '../../../../src/features/useradmin/redux/constants';

import {
  updateadminuser,
  reducer,
} from '../../../../src/features/useradmin/redux/updateadminuser';

describe('useradmin/redux/updateadminuser', () => {
  it('returns correct action by updateadminuser', () => {
    expect(updateadminuser()).toHaveProperty('type', USERADMIN_UPDATEADMINUSER);
  });

  it('handles action type USERADMIN_UPDATEADMINUSER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: USERADMIN_UPDATEADMINUSER }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
