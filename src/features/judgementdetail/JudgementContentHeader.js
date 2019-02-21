import React from "react";

class JudgementContentHeader extends React.Component {
  render() {
    return (
      <div className="judgementheader">
        <form action="/search" className="search w-form">
          <input
            type="search"
            id="search"
            name="query"
            placeholder="Search within case"
            maxLength={256}
            required
            className="search-input w-input"
          />
          <input type="submit" className="search-button w-button" />
        </form>
        <a href="#" className="buttonbookmark w-button" />
        <a href="#" className="buttonprint w-button" />
        <a href="#" className="buttondownloadpdf w-button" />
      </div>
    );
  }
}

export default JudgementContentHeader;
