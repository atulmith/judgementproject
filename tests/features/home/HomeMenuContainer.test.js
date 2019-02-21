import React from 'react';
import { shallow } from 'enzyme';
import { HomeMenuContainer } from '../../../src/features/home/HomeMenuContainer';

describe('home/HomeMenuContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomeMenuContainer {...props} />
    );

    expect(
      renderedComponent.find('.home-home-menu-container').length
    ).toBe(1);
  });
});
