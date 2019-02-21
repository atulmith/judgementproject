import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN,
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS,
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE,
  JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR,
} from 'src/features/judgementdetail/redux/constants';

import {
  getjudgementdetail,
  dismissGetjudgementdetailError,
  doGetjudgementdetail,
  reducer,
} from 'src/features/judgementdetail/redux/getjudgementdetail';

describe('judgementdetail/redux/getjudgementdetail', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by getjudgementdetail', () => {
    expect(getjudgementdetail()).to.have.property('type', JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN);
  });

  it('returns correct action by dismissGetjudgementdetailError', () => {
    expect(dismissGetjudgementdetailError()).to.have.property('type', JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR);
  });

  // saga tests
  const generator = doGetjudgementdetail();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE action when failed', () => {
    const generatorForError = doGetjudgementdetail();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN correctly', () => {
    const prevState = { getjudgementdetailPending: false };
    const state = reducer(
      prevState,
      { type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getjudgementdetailPending).to.be.true;
  });

  it('handles action type JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS correctly', () => {
    const prevState = { getjudgementdetailPending: true };
    const state = reducer(
      prevState,
      { type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getjudgementdetailPending).to.be.false;
  });

  it('handles action type JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE correctly', () => {
    const prevState = { getjudgementdetailPending: true };
    const state = reducer(
      prevState,
      { type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getjudgementdetailPending).to.be.false;
    expect(state.getjudgementdetailError).to.exist;
  });

  it('handles action type JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR correctly', () => {
    const prevState = { getjudgementdetailError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: JUDGEMENTDETAIL_GETJUDGEMENTDETAIL_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getjudgementdetailError).to.be.null;
  });
});