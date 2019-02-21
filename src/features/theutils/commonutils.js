import React from "react";
export function fetchUser(userId) {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  // return axios.get('/api/user/' + userId);
};

export function  getCaseHeadNotes(thearr){
    let temparr= thearr.map(a=>{
      return a.HeadNoteOthers
    });
    let ret=temparr.join(",");
    return ret;
  }

export function  getCaseCitations(thearr){
    let temparr= thearr.map(a=>{
      return a.CitationNoteOthers
    });
    let ret=temparr.join(" : ");
    return ret;
  }

export function  getCaseJudges(thearr){
    let ret= thearr.map(a=>{
      return <React.Fragment key={a._id}>{a.judgeName} <br /></React.Fragment>
    });
    
    return ret;
  }

  export function  getCaseAdvocates(thearr){
    let ret= thearr.map(a=>{
      return <React.Fragment key={a._id}>
          <div className="advocatetitle">{a.CaseAdvocateStatus}</div>
          <div className="advocatenames"> {a.CaseAdvocateId.advocateName}, Advocate.</div>
      </React.Fragment>
    });
    
    return ret;
  }

  export function  getReferredCases(thearr){
    let ret= thearr.map(a=>{
      return <React.Fragment key={a.RefCaseNosFK._id}>
          {a.RefCaseNosFK.caseTitle}, {getCaseCitations(a.RefCaseNosFK.caseCitation)}
      </React.Fragment>
    });
    
    return ret;
  }


export function   getShortcaseDescription(casedesc){
    return casedesc.slice(0,100);
  }

export function   getConvertDateFormat(dt){
    let tempdt=new Date(dt);
    return tempdt.toLocaleDateString();
  }
