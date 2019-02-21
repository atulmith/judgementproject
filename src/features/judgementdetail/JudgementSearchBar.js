import React from "react";

class JudgementSearchBar extends React.Component {
  render() {
    return (
      <div className="div-search-bar">
        <div data-delay={0} className="dropdown-6 w-dropdown">
          <div className="dropdown-toggle-4 w-dropdown-toggle">
            <div className="icon-5 w-icon-dropdown-toggle" />
            <div>All Cases</div>
          </div>
          <nav className="dropdown-list-3 w-dropdown-list">
            <a
              href="#"
              data-w-id="5fae4d9b-0e9a-9a02-2b7d-ef423110e1a5"
              className="dropdown-link-4 w-dropdown-link"
            >
              By Citation
            </a>
            <a
              href="#"
              data-w-id="5fae4d9b-0e9a-9a02-2b7d-ef423110e1a7"
              className="dropdown-link-4 w-dropdown-link"
            >
              By Judge(s)
            </a>
            <a
              href="#"
              data-w-id="5fae4d9b-0e9a-9a02-2b7d-ef423110e1a9"
              className="dropdown-link-4 w-dropdown-link"
            >
              By Parties
            </a>
            <a
              href="#"
              data-w-id="5fae4d9b-0e9a-9a02-2b7d-ef423110e1ab"
              className="dropdown-link-4 w-dropdown-link"
            >
              By Acts
            </a>
            <a
              href="#"
              data-w-id="5fae4d9b-0e9a-9a02-2b7d-ef423110e1ad"
              className="dropdown-link-5 w-dropdown-link"
            >
              Search Bare Acts
            </a>
          </nav>
        </div>
        <form action="/search" className="search-2 w-form">
          <input
            type="search"
            className="search-input-2 w-input"
            autoFocus={true}
            maxLength={256}
            name="query"
            placeholder="State of Punjab"
            id="search"
            required
          />
          <input
            type="submit"
            defaultValue="Search"
            className="search-button-2 w-button"
          />
        </form>
        <div className="divider" />
        <div className="divider" />
        <div className="divider" />
      </div>
    );
  }
}

export default JudgementSearchBar;
