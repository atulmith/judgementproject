import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  SEARCHFILTER_SEARCHCASES_BEGIN,
  SEARCHFILTER_SEARCHCASES_SUCCESS,
  SEARCHFILTER_SEARCHCASES_FAILURE,
  SEARCHFILTER_SEARCHCASES_DISMISS_ERROR,
} from 'src/features/searchfilter/redux/constants';

import {
  searchcases,
  dismissSearchcasesError,
  doSearchcases,
  reducer,
} from 'src/features/searchfilter/redux/searchcases';

describe('searchfilter/redux/searchcases', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by searchcases', () => {
    expect(searchcases()).to.have.property('type', SEARCHFILTER_SEARCHCASES_BEGIN);
  });

  it('returns correct action by dismissSearchcasesError', () => {
    expect(dismissSearchcasesError()).to.have.property('type', SEARCHFILTER_SEARCHCASES_DISMISS_ERROR);
  });

  // saga tests
  const generator = doSearchcases();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches SEARCHFILTER_SEARCHCASES_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: SEARCHFILTER_SEARCHCASES_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches SEARCHFILTER_SEARCHCASES_FAILURE action when failed', () => {
    const generatorForError = doSearchcases();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: SEARCHFILTER_SEARCHCASES_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type SEARCHFILTER_SEARCHCASES_BEGIN correctly', () => {
    const prevState = { searchcasesPending: false };
    const state = reducer(
      prevState,
      { type: SEARCHFILTER_SEARCHCASES_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.searchcasesPending).to.be.true;
  });

  it('handles action type SEARCHFILTER_SEARCHCASES_SUCCESS correctly', () => {
    const prevState = { searchcasesPending: true };
    const state = reducer(
      prevState,
      { type: SEARCHFILTER_SEARCHCASES_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.searchcasesPending).to.be.false;
  });

  it('handles action type SEARCHFILTER_SEARCHCASES_FAILURE correctly', () => {
    const prevState = { searchcasesPending: true };
    const state = reducer(
      prevState,
      { type: SEARCHFILTER_SEARCHCASES_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.searchcasesPending).to.be.false;
    expect(state.searchcasesError).to.exist;
  });

  it('handles action type SEARCHFILTER_SEARCHCASES_DISMISS_ERROR correctly', () => {
    const prevState = { searchcasesError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: SEARCHFILTER_SEARCHCASES_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.searchcasesError).to.be.null;
  });
});