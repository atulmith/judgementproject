import React from 'react';
import { shallow } from 'enzyme';
import { JudgementContentDetail } from '../../../src/features/judgementdetail/JudgementContentDetail';

describe('judgementdetail/JudgementContentDetail', () => {
  it('renders node with correct class name', () => {
    const props = {
      judgementdetail: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <JudgementContentDetail {...props} />
    );

    expect(
      renderedComponent.find('.judgementdetail-judgement-content-detail').length
    ).toBe(1);
  });
});
