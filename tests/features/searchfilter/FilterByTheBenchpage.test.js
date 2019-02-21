import React from 'react';
import { shallow } from 'enzyme';
import { FilterByTheBenchpage } from '../../../src/features/searchfilter';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FilterByTheBenchpage />);
  expect(renderedComponent.find('.searchfilter-filter-by-the-benchpage').length).toBe(1);
});
