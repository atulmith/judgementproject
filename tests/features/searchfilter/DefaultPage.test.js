import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/searchfilter/DefaultPage';

describe('searchfilter/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      searchfilter: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.searchfilter-default-page').length
    ).toBe(1);
  });
});
