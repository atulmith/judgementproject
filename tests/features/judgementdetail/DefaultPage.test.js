import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/judgementdetail/DefaultPage';

describe('judgementdetail/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      judgementdetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.judgementdetail-default-page').length
    ).toBe(1);
  });
});
