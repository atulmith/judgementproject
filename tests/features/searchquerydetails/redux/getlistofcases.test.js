import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN,
  SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS,
  SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE,
  SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR,
} from 'src/features/searchquerydetails/redux/constants';

import {
  getlistofcases,
  dismissGetlistofcasesError,
  doGetlistofcases,
  reducer,
} from 'src/features/searchquerydetails/redux/getlistofcases';

describe('searchquerydetails/redux/getlistofcases', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by getlistofcases', () => {
    expect(getlistofcases()).to.have.property('type', SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN);
  });

  it('returns correct action by dismissGetlistofcasesError', () => {
    expect(dismissGetlistofcasesError()).to.have.property('type', SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR);
  });

  // saga tests
  const generator = doGetlistofcases();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE action when failed', () => {
    const generatorForError = doGetlistofcases();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN correctly', () => {
    const prevState = { getlistofcasesPending: false };
    const state = reducer(
      prevState,
      { type: SEARCHQUERYDETAILS_GETLISTOFCASES_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getlistofcasesPending).to.be.true;
  });

  it('handles action type SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS correctly', () => {
    const prevState = { getlistofcasesPending: true };
    const state = reducer(
      prevState,
      { type: SEARCHQUERYDETAILS_GETLISTOFCASES_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getlistofcasesPending).to.be.false;
  });

  it('handles action type SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE correctly', () => {
    const prevState = { getlistofcasesPending: true };
    const state = reducer(
      prevState,
      { type: SEARCHQUERYDETAILS_GETLISTOFCASES_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getlistofcasesPending).to.be.false;
    expect(state.getlistofcasesError).to.exist;
  });

  it('handles action type SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR correctly', () => {
    const prevState = { getlistofcasesError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: SEARCHQUERYDETAILS_GETLISTOFCASES_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getlistofcasesError).to.be.null;
  });
});