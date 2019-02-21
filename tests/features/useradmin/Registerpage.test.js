import React from 'react';
import { shallow } from 'enzyme';
import { Registerpage } from '../../../src/features/useradmin/Registerpage';

describe('useradmin/Registerpage', () => {
  it('renders node with correct class name', () => {
    const props = {
      useradmin: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Registerpage {...props} />
    );

    expect(
      renderedComponent.find('.useradmin-registerpage').length
    ).toBe(1);
  });
});
