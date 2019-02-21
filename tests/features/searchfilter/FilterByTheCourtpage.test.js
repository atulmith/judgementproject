import React from 'react';
import { shallow } from 'enzyme';
import { FilterByTheCourtpage } from '../../../src/features/searchfilter';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FilterByTheCourtpage />);
  expect(renderedComponent.find('.searchfilter-filter-by-the-courtpage').length).toBe(1);
});
