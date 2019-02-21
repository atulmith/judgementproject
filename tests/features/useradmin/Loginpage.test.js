import React from 'react';
import { shallow } from 'enzyme';
import { Loginpage } from '../../../src/features/useradmin/Loginpage';

describe('useradmin/Loginpage', () => {
  it('renders node with correct class name', () => {
    const props = {
      useradmin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Loginpage {...props} />
    );

    expect(
      renderedComponent.find('.useradmin-loginpage').length
    ).toBe(1);
  });
});
