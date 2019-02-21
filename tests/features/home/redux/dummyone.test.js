import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_DUMMYONE_BEGIN,
  HOME_DUMMYONE_SUCCESS,
  HOME_DUMMYONE_FAILURE,
  HOME_DUMMYONE_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  dummyone,
  dismissDummyoneError,
  doDummyone,
  reducer,
} from 'src/features/home/redux/dummyone';

describe('home/redux/dummyone', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by dummyone', () => {
    expect(dummyone()).to.have.property('type', HOME_DUMMYONE_BEGIN);
  });

  it('returns correct action by dismissDummyoneError', () => {
    expect(dismissDummyoneError()).to.have.property('type', HOME_DUMMYONE_DISMISS_ERROR);
  });

  // saga tests
  const generator = doDummyone();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches HOME_DUMMYONE_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: HOME_DUMMYONE_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches HOME_DUMMYONE_FAILURE action when failed', () => {
    const generatorForError = doDummyone();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: HOME_DUMMYONE_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type HOME_DUMMYONE_BEGIN correctly', () => {
    const prevState = { dummyonePending: false };
    const state = reducer(
      prevState,
      { type: HOME_DUMMYONE_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.dummyonePending).to.be.true;
  });

  it('handles action type HOME_DUMMYONE_SUCCESS correctly', () => {
    const prevState = { dummyonePending: true };
    const state = reducer(
      prevState,
      { type: HOME_DUMMYONE_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.dummyonePending).to.be.false;
  });

  it('handles action type HOME_DUMMYONE_FAILURE correctly', () => {
    const prevState = { dummyonePending: true };
    const state = reducer(
      prevState,
      { type: HOME_DUMMYONE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.dummyonePending).to.be.false;
    expect(state.dummyoneError).to.exist;
  });

  it('handles action type HOME_DUMMYONE_DISMISS_ERROR correctly', () => {
    const prevState = { dummyoneError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_DUMMYONE_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.dummyoneError).to.be.null;
  });
});