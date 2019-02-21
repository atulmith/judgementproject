import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/searchquerydetails/DefaultPage';

describe('searchquerydetails/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      searchquerydetails: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.searchquerydetails-default-page').length
    ).toBe(1);
  });
});
