import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  USERADMIN_DO_LOGIN_BEGIN,
  USERADMIN_DO_LOGIN_SUCCESS,
  USERADMIN_DO_LOGIN_FAILURE,
  USERADMIN_DO_LOGIN_DISMISS_ERROR,
} from 'src/features/useradmin/redux/constants';

import {
  doLogin,
  dismissDoLoginError,
  doDoLogin,
  reducer,
} from 'src/features/useradmin/redux/doLogin';

describe('useradmin/redux/doLogin', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by doLogin', () => {
    expect(doLogin()).to.have.property('type', USERADMIN_DO_LOGIN_BEGIN);
  });

  it('returns correct action by dismissDoLoginError', () => {
    expect(dismissDoLoginError()).to.have.property('type', USERADMIN_DO_LOGIN_DISMISS_ERROR);
  });

  // saga tests
  const generator = doDoLogin();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches USERADMIN_DO_LOGIN_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: USERADMIN_DO_LOGIN_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches USERADMIN_DO_LOGIN_FAILURE action when failed', () => {
    const generatorForError = doDoLogin();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: USERADMIN_DO_LOGIN_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type USERADMIN_DO_LOGIN_BEGIN correctly', () => {
    const prevState = { doLoginPending: false };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_LOGIN_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doLoginPending).to.be.true;
  });

  it('handles action type USERADMIN_DO_LOGIN_SUCCESS correctly', () => {
    const prevState = { doLoginPending: true };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_LOGIN_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doLoginPending).to.be.false;
  });

  it('handles action type USERADMIN_DO_LOGIN_FAILURE correctly', () => {
    const prevState = { doLoginPending: true };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_LOGIN_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doLoginPending).to.be.false;
    expect(state.doLoginError).to.exist;
  });

  it('handles action type USERADMIN_DO_LOGIN_DISMISS_ERROR correctly', () => {
    const prevState = { doLoginError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_LOGIN_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doLoginError).to.be.null;
  });
});