import React from "react";
import { Link  } from 'react-router-dom';
import {getCaseHeadNotes,getShortcaseDescription,getConvertDateFormat} from '../theutils/commonutils';
class SearchQueryPageListItem extends React.Component {

  // getCaseHeadNotes=thearr=>{
  //   let temparr= thearr.map(a=>{
  //     return a.HeadNoteOthers
  //   });
  //   let ret=temparr.join(",");
  //   return ret;
  // }

  // getShortcaseDescription=casedesc=>{
  //   return casedesc.slice(0,100);
  // }

  // getConvertDateFormat=dt=>{
  //   let tempdt=new Date(dt);
  //   return tempdt.toLocaleDateString();
  // }

  doLoadJudgementCase=id=>{
    // browserHistory.push('judgementdetail/detail/'+id); 
    
    this.props.loadCase(id);
  }

  render() {
    const {_id,caseTitle,caseCourtIdFK,caseCategory,judgmentDate,caseHeadNotes,caseDescription}=this.props.listdata;
    const {courtName}=caseCourtIdFK;

    const theheadnotes=getCaseHeadNotes(caseHeadNotes);
    const thecasedesc=getShortcaseDescription(caseDescription);
    const thejudgmntdt=getConvertDateFormat(judgmentDate);
    return (
      <div className="listitem" onClick={(e)=>this.doLoadJudgementCase(_id)}>
        <div className="div-block-16 w-clearfix">
          <div className="courtlv">{courtName}</div>
          <div className="datelv">{caseCategory} APPEAL</div>
          <div className="datelv"> | </div>
          <div className="datelv">{thejudgmntdt}</div>
        </div>
        <div className="partieslv">
          {caseTitle} 
        </div>
        <div className="headnotelv">
          {theheadnotes}
        </div>
        <div className="snippetlv">
          {thecasedesc}
        </div>
      </div>
    );
  }
}

export default SearchQueryPageListItem;
