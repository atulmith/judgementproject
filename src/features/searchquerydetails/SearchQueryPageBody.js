import React from "react";
import SearchQueryPageLeftMenu from "./SearchQueryPageLeftMenu";
import SearchQueryPageSearchBarContainer from "./SearchQueryPageSearchBarContainer";
import SearchQueryPageContent from "./SearchQueryPageContent";

class SearchQueryPageBody extends React.Component {
  render() {
    return (
      <div>
        <SearchQueryPageLeftMenu />
        <SearchQueryPageSearchBarContainer />
        <SearchQueryPageContent />
        
      </div>
    );
  }
}

export default SearchQueryPageBody;
