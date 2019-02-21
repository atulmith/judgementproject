// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  JudgementDefaultPage,
} from './';

export default {
  path: 'judgementdetail',
  name: 'Judgementdetail',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'detail/:id', name: 'Judgement default page', component: JudgementDefaultPage },
  ],
};
