import React from "react";

class HomeSection extends React.Component {
  render() {
    return (
      <div className="section">
        <img
          src="/images/logo-black-query.png"
          width={97}
          alt="alt image"
          className="image-4 image-5"
        />
        <div>
          <div className="text-block-11">The Legal Search Engine</div>
        </div>
        <div className="divmainsearchbar">
          <div data-delay={0} className="dropdown-6 w-dropdown">
            <div className="dropdown-toggle-4 w-dropdown-toggle">
              <div className="icon-5 w-icon-dropdown-toggle" />
              <div>All Cases</div>
            </div>
            <nav className="dropdown-list-3 w-dropdown-list">
              <a
                href="#"
                data-w-id="7dc7dfdf-89d1-c84d-50c5-ee75e6466e78"
                className="dropdown-link-4 w-dropdown-link"
              >
                By Citation
              </a>
              <a
                href="#"
                data-w-id="7dc7dfdf-89d1-c84d-50c5-ee75e6466e7a"
                className="dropdown-link-4 w-dropdown-link"
              >
                By Judge(s)
              </a>
              <a
                href="#"
                data-w-id="7dc7dfdf-89d1-c84d-50c5-ee75e6466e7c"
                className="dropdown-link-4 w-dropdown-link"
              >
                By Parties
              </a>
              <a
                href="#"
                data-w-id="7dc7dfdf-89d1-c84d-50c5-ee75e6466e7e"
                className="dropdown-link-4 w-dropdown-link"
              >
                By Acts
              </a>
              <a
                href="#"
                data-w-id="7dc7dfdf-89d1-c84d-50c5-ee75e6466e80"
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
      </div>
    );
  }
}

export default HomeSection;
