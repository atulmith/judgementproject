import React from 'react';
import { shallow } from 'enzyme';
import { FilterByTheSubject } from '../../../src/features/searchfilter';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FilterByTheSubject />);
  expect(renderedComponent.find('.searchfilter-filter-by-the-subject').length).toBe(1);
});
