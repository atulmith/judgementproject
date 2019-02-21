import React from 'react';
import { shallow } from 'enzyme';
import { FilterByTheYearpage } from '../../../src/features/searchfilter';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FilterByTheYearpage />);
  expect(renderedComponent.find('.searchfilter-filter-by-the-yearpage').length).toBe(1);
});
