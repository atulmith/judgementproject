import React from 'react';
import { shallow } from 'enzyme';
import { JudgementDefaultPage } from '../../../src/features/judgementdetail/JudgementDefaultPage';

describe('judgementdetail/JudgementDefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      judgementdetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <JudgementDefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.judgementdetail-judgement-default-page').length
    ).toBe(1);
  });
});
