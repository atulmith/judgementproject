import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/useradmin/DefaultPage';

describe('useradmin/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      useradmin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.useradmin-default-page').length
    ).toBe(1);
  });
});
