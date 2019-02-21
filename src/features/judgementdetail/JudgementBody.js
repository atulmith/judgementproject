import React from "react";
import JudgementLeftMenu from "./JudgementLeftMenu";
import JudgementSearchBar from "./JudgementSearchBar";
import JudgementContent from "./JudgementContent";
import SearchQueryPageSearchBarContainer from "../searchquerydetails/SearchQueryPageSearchBarContainer";

class JudgementBody extends React.Component {
  render() {
    return (
      <div>
        <JudgementLeftMenu />
        <SearchQueryPageSearchBarContainer />
        <JudgementContent />
        
      </div>
    );
  }
}

export default JudgementBody;
