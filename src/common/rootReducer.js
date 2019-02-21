import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import searchquerydetailsReducer from '../features/searchquerydetails/redux/reducer';
import theutilsReducer from '../features/theutils/redux/reducer';
import judgementdetailReducer from '../features/judgementdetail/redux/reducer';
import searchfilterReducer from '../features/searchfilter/redux/reducer';
import useradminReducer from '../features/useradmin/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  examples: examplesReducer,
  searchquerydetails: searchquerydetailsReducer,
  theutils: theutilsReducer,
  judgementdetail: judgementdetailReducer,
  searchfilter: searchfilterReducer,
  useradmin: useradminReducer,
};

export default combineReducers(reducerMap);
