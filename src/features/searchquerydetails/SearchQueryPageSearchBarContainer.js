import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchQueryPageSearchBar from './SearchQueryPageSearchBar';

export class SearchQueryPageSearchBarContainer extends Component {
  static propTypes = {
    searchquerydetails: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="searchquerydetails-search-query-page-search-bar-container">
        Page Content: searchquerydetails/SearchQueryPageSearchBarContainer
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    searchquerydetails: state.searchquerydetails,
    useradmin: state.useradmin,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchQueryPageSearchBar);
