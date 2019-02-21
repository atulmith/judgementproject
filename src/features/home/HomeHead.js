import React from "react";

class HomeHead extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta content="Home" property="og:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="css/query-960870.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        {}
        <link
          href="images/query-favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/query-256.png" rel="apple-touch-icon" />
      </div>
    );
  }
}

export default HomeHead;
