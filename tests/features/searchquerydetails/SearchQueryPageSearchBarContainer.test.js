import React from 'react';
import { shallow } from 'enzyme';
import { SearchQueryPageSearchBarContainer } from '../../../src/features/searchquerydetails/SearchQueryPageSearchBarContainer';

describe('searchquerydetails/SearchQueryPageSearchBarContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      searchquerydetails: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchQueryPageSearchBarContainer {...props} />
    );

    expect(
      renderedComponent.find('.searchquerydetails-search-query-page-search-bar-container').length
    ).toBe(1);
  });
});
