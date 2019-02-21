import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Sidebar} from 'primereact/sidebar';
import {OverlayPanel} from 'primereact/overlaypanel';

import * as actions from './redux/actions';
import JudgementFilterpage from './JudgementFilterpage';

export class DefaultPage extends Component {
  static propTypes = {
    searchfilter: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  sendfilterparams=(obj)=>{
      //alert('the data='+JSON.stringify(obj,1));
      this.props.actions.searchcases(obj);
  }

  render() {
    return (
      <div className="searchfilter-default-page">
        <Sidebar visible={this.props.visibleLeft} baseZIndex={1000000}  style={{width:'500px'}} onHide={(e) => this.props.setVisibleLeft(false)}>
          <JudgementFilterpage sendfilterparams={(o)=>this.sendfilterparams(o)}/>

          
        </Sidebar>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    searchfilter: state.searchfilter,
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
