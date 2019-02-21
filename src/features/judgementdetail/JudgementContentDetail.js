import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import JudgementContentRealData from "./JudgementContentRealData";

export class JudgementContentDetail extends Component {
  static propTypes = {
    judgementdetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="judgementdetail-judgement-content-detail">
        Page Content: judgementdetail/JudgementContentDetail
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    judgementdetail: state.judgementdetail,
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
)(JudgementContentRealData);
