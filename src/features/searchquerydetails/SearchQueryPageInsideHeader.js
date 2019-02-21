import React from "react";

class SearchQueryPageInsideHeader extends React.Component {
  render() {
    return (
      <div className="div-block-35">
        <div data-delay={0} className="dropdownsort w-dropdown">
          <div className="dropdown-toggle-sort w-dropdown-toggle">
            <div className="icon-5 w-icon-dropdown-toggle" />
            <div className="text-block-9">Relevance</div>
          </div>
          <nav className="dropdown-list-3 w-dropdown-list">
            <a
              href="#"
              data-w-id="b16acb5b-410d-c8b5-008b-dd3adbb2a6b1"
              className="dropdown-link-4 w-dropdown-link"
            >
              Relevance
            </a>
            <a
              href="#"
              data-w-id="b16acb5b-410d-c8b5-008b-dd3adbb2a6b3"
              className="dropdown-link-4 w-dropdown-link"
            >
              Most Cited
            </a>
            <a
              href="#"
              data-w-id="b16acb5b-410d-c8b5-008b-dd3adbb2a6b5"
              className="dropdown-link-4 w-dropdown-link"
            >
              Latest
            </a>
            <a
              href="#"
              data-w-id="cfe870e3-520c-52bd-5b6a-267274665e3d"
              className="dropdown-link-4 w-dropdown-link"
            >
              Oldest
            </a>
          </nav>
        </div>
        <form action="/search" className="search-3 w-form">
          <input
            type="search"
            id="search"
            name="query"
            maxLength={256}
            required
            placeholder="Search within Results"
            className="search-input-3 w-input"
          />
          <input type="submit" className="search-button w-button" />
          <div className="text-block-8">{this.props.countofrows} Results</div>
        </form>
      </div>
    );
  }
}

export default SearchQueryPageInsideHeader;
