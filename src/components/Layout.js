import _ from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import { safePrefix } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {_.get(this.props, "pageContext.frontmatter.title") && _.get(this.props, "pageContext.frontmatter.title") + " - "}
            {_.get(this.props, "pageContext.site.siteMetadata.title")}
          </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initialScale=1.0" />
          <meta name="google" content="notranslate" />
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i%7CPT+Serif:400,700" rel="stylesheet" />
          <link rel="stylesheet" href={safePrefix("assets/css/main.css")} />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />

          {_.get(this.props, "pageContext.frontmatter.template") === "post" &&
            _.get(this.props, "pageContext.frontmatter.canonical_url") && (
              <link rel="canonical" href={_.get(this.props, "pageContext.frontmatter.canonical_url")} />
            )}
        </Helmet>
        <div
          id="page"
          className={
            "site layout-" +
            _.get(this.props, "pageContext.site.siteMetadata.layout_style") +
            " palette-" +
            _.get(this.props, "pageContext.site.siteMetadata.palette")
          }
        >
          <Header {...this.props} />
          <div id="content" className="site-content">
            <main id="main" className="site-main inner">
              {this.props.children}
            </main>
          </div>
          {_.get(this.props, "pageContext.site.data.subscribe.enabled") && <Subscribe {...this.props} />}
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
