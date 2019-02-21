import React from 'react';
import { shallow } from 'enzyme';
import { FilterByThePartiespage } from '../../../src/features/searchfilter';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FilterByThePartiespage />);
  expect(renderedComponent.find('.searchfilter-filter-by-the-partiespage').length).toBe(1);
});
