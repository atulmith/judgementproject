import React from "react";
import {getCaseHeadNotes,getShortcaseDescription,
        getConvertDateFormat,getCaseCitations,
        getCaseJudges,getCaseAdvocates,getReferredCases} from '../theutils/commonutils';
import {TabView,TabPanel} from 'primereact/tabview';

class JudgementContentRealData extends React.Component {
  render() {
    const thedata=this.props.judgementdetail.getjudgementdetailData;

    if(!thedata){
      return '<div style={{alignText:center}}>Not Data From server</div>';
    }
    // const {} =thedata;
    const {_id,caseTitle,caseQueryNos,caseCourtIdFK,
          caseCategory,judgmentDate,caseHeadNotes,
          caseDescription,caseCitation,judges,advocates,
          referredCases,miscInfo}=thedata;
    const {courtName}=caseCourtIdFK;
    const jdgmntdt=getConvertDateFormat(judgmentDate);
    const jdgmntcitations=getCaseCitations(caseCitation);
    const jdgmntjudges=getCaseJudges(judges);
    const jdgmntadvocates=getCaseAdvocates(advocates);
    const jdgmntreferredcases=getReferredCases(referredCases);
    const jdgmntheadnotes=getCaseHeadNotes(caseHeadNotes);
    
    return (
      <div className="container w-container">
        <div className="courtname">{courtName}</div>
        <div className="caseno">
          {" "}
          {caseCategory} Appeal Nos. {caseQueryNos}. D/d. {jdgmntdt}.
        </div>
        <h1 className="parties filer">
          {caseTitle}
        </h1>
        <TabView >
          <TabPanel header="Citations" >
             <div className="text-block-3">
              {jdgmntcitations}
              </div>
          </TabPanel>
          <TabPanel header="Judges"  >
              <div className="text-block-3">
                {jdgmntjudges}
              </div>
          </TabPanel>
          <TabPanel header="Advocates" >
              {jdgmntadvocates}
          </TabPanel>
          <TabPanel header="Cases Referred" >
              <div className="text-block-3">
                {jdgmntreferredcases}
              </div>
          </TabPanel>
          <TabPanel header="Analytics" >
              Citation graph over the years
          </TabPanel>
      </TabView>
        
        <div className="benchtitle">HEADNOTE</div>
        <div className="headnote">
          {jdgmntheadnotes}
          
        </div>
        <div className="benchtitle">JUDGEMENT</div>
        <p className="judgementpara">
          {caseDescription}
          
        </p>
        <div className="benchtitle">ADDITIONAL INFO</div>
        <p className="additionalinforpara">
          {miscInfo}
        </p>
      </div>
    );
  }
}

export default JudgementContentRealData;
/**
 <div
          data-duration-in={300}
          data-duration-out={100}
          className="tabs-2 w-tabs"
        >
          <div className="tabs-menu w-tab-menu">
            <a
              data-w-tab="Tab 1"
              className="tab-link w-inline-block w-tab-link"
            >
              <div>Citations</div>
            </a>
            <a
              data-w-tab="Tab 2"
              className="tab-link w-inline-block w-tab-link"
            >
              <div>Judges</div>
            </a>
            <a
              data-w-tab="Tab 3"
              className="tab-link w-inline-block w-tab-link"
            >
              <div>Advocates</div>
            </a>
            <a
              data-w-tab="Tab 4"
              className="tab-link w-inline-block w-tab-link"
            >
              <div>Cases Referred</div>
            </a>
            <a
              data-w-tab="Tab 5"
              className="tab-link w-inline-block w-tab-link w--current"
            >
              <div>Analytics</div>
            </a>
          </div>
          <div className="w-tab-content">
            <div data-w-tab="Tab 1" className="tab-pane-tab-1-2 w-tab-pane">
              <div className="text-block-3">
                {jdgmntcitations}
              </div>
            </div>
            <div data-w-tab="Tab 2" className="w-tab-pane">
              <div className="text-block-3">
                {jdgmntjudges}
                {" "}
                
              </div>
            </div>
            <div data-w-tab="Tab 3" className="w-tab-pane">
              {jdgmntadvocates}
              
              
            </div>
            <div data-w-tab="Tab 4" className="w-tab-pane">
              <div className="text-block-3">
                {jdgmntreferredcases}
                
              </div>
            </div>
            <div data-w-tab="Tab 5" className="w-tab-pane w--tab-active">
              <div className="text-block-12">Citation graph over the years</div>
            </div>
          </div>
        </div>
 */