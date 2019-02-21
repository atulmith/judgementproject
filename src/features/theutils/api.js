import axios from 'axios';
import {getResturl} from './restutil.js';
import qs from 'qs';

let config = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  responseType: 'json'
};
export function fetchUser(userId) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.get('/api/user/' + userId);
};

export function fetchAllCases() {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  console.log('inside axios cass'+getResturl());
  return axios.get(getResturl()+'casesmaster/');
};

export function fetchOneCase(id) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.get(getResturl()+'casesmaster/'+id);
};

export function doSearchCases(obj) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.post(getResturl()+'casesmaster/searchcases/',obj);
  // return fetch(getResturl()+'casesmaster/searchcases/',{
  //     method:'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(obj)});
  };

/**
 * API call to register the user
 */
export function doRegisterAdmin(obj) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.post(getResturl()+'adminuser/',obj);
  
  };

  /**
 * API call to login the user
 */
export function doLoginAdmin(obj) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return axios.post(getResturl()+'adminuser/doLogin/',obj);
  
  };

