import React from "react";
import JudgementContentHeader from "./JudgementContentHeader";
import JudgementContentRealData from "./JudgementContentRealData";
import JudgementContentDetail from './JudgementContentDetail';

class JudgementContentListView extends React.Component {
  render() {
    return (
      <div className="listview">
        <JudgementContentHeader />
        <JudgementContentDetail />
      </div>
    );
  }
}
//<JudgementContentRealData />
export default JudgementContentListView;
