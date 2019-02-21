import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchQueryPageBody from './SearchQueryPageBody';

export class DefaultPage extends Component {
  static propTypes = {
    searchquerydetails: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
componentDidMount() {
     this.props.actions.getlistofcases();
  }
  render() {
    return (
      <SearchQueryPageBody/>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    searchquerydetails: state.searchquerydetails,
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
)(DefaultPage);
