import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SearchQueryPageInsideHeader from "./SearchQueryPageInsideHeader";
import SearchQueryPageListItem from "./SearchQueryPageListItem";
import history from '../../common/history';

class SearchQueryPageResults extends React.Component {
  static propTypes = {
    searchquerydetails: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    //  this.props.actions.getlistofcases();
  }

  loadJudgementCase=caseid=>{
    // alert('loadJudgmentCase'+caseid);
    history.push('judgementdetail/detail/'+caseid);
  }

  showListItem =(datarray)=>{
    return datarray.map(a=>{
      return <SearchQueryPageListItem listdata={a} key={a._id} loadCase={(id)=>this.loadJudgementCase(id)}/>
    })
  }

  render() {

    let container=null,countofrows=0;
    if(this.props.searchquerydetails.listofcasesData && this.props.searchquerydetails.listofcasesData.length>0){
      countofrows=this.props.searchquerydetails.listofcasesData.length;
      container=this.showListItem(this.props.searchquerydetails.listofcasesData)
    }

    return (
      <div
        data-w-id="786ce1f3-c7aa-914d-fd83-e3ada192684b"
        style={{
          width: "75%"
        }}
        className="resultslistview"
      >
        <SearchQueryPageInsideHeader countofrows={countofrows}/>
        {container}
        <div>
        ====================================
        </div>
          
 
      </div>
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
)(SearchQueryPageResults);

// export default SearchQueryPageResults;
