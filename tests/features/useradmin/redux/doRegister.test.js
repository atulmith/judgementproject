import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  USERADMIN_DO_REGISTER_BEGIN,
  USERADMIN_DO_REGISTER_SUCCESS,
  USERADMIN_DO_REGISTER_FAILURE,
  USERADMIN_DO_REGISTER_DISMISS_ERROR,
} from 'src/features/useradmin/redux/constants';

import {
  doRegister,
  dismissDoRegisterError,
  doDoRegister,
  reducer,
} from 'src/features/useradmin/redux/doRegister';

describe('useradmin/redux/doRegister', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by doRegister', () => {
    expect(doRegister()).to.have.property('type', USERADMIN_DO_REGISTER_BEGIN);
  });

  it('returns correct action by dismissDoRegisterError', () => {
    expect(dismissDoRegisterError()).to.have.property('type', USERADMIN_DO_REGISTER_DISMISS_ERROR);
  });

  // saga tests
  const generator = doDoRegister();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches USERADMIN_DO_REGISTER_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: USERADMIN_DO_REGISTER_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches USERADMIN_DO_REGISTER_FAILURE action when failed', () => {
    const generatorForError = doDoRegister();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: USERADMIN_DO_REGISTER_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type USERADMIN_DO_REGISTER_BEGIN correctly', () => {
    const prevState = { doRegisterPending: false };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_REGISTER_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doRegisterPending).to.be.true;
  });

  it('handles action type USERADMIN_DO_REGISTER_SUCCESS correctly', () => {
    const prevState = { doRegisterPending: true };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_REGISTER_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doRegisterPending).to.be.false;
  });

  it('handles action type USERADMIN_DO_REGISTER_FAILURE correctly', () => {
    const prevState = { doRegisterPending: true };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_REGISTER_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doRegisterPending).to.be.false;
    expect(state.doRegisterError).to.exist;
  });

  it('handles action type USERADMIN_DO_REGISTER_DISMISS_ERROR correctly', () => {
    const prevState = { doRegisterError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: USERADMIN_DO_REGISTER_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.doRegisterError).to.be.null;
  });
});