// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Registerpage,
  Loginpage,
} from './';

export default {
  path: 'useradmin',
  name: 'Useradmin',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'register', name: 'Registerpage', component: Registerpage },
    { path: 'login', name: 'Loginpage', component: Loginpage },
  ],
};
