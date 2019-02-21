import React from 'react';
import { shallow } from 'enzyme';
import { JudgementFilterpage } from '../../../src/features/searchfilter';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<JudgementFilterpage />);
  expect(renderedComponent.find('.searchfilter-judgement-filterpage').length).toBe(1);
});
