import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import JudgementBody from './JudgementBody';

export class JudgementDefaultPage extends Component {
  static propTypes = {
    judgementdetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    console.log("my location",this.props.history.location);
    // alert("caseid param is "+this.props.caseid);
    this.props.actions.getjudgementdetail(this.props.caseid);
  }

  render() {
    return (
      <JudgementBody/>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state,ownProps) {
  return {
    judgementdetail: state.judgementdetail,
    caseid:ownProps.match.params.id
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
)(JudgementDefaultPage);
