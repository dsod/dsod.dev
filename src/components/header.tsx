import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ProfileImage from "./images/profile"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>Hi.</h1>
      <h3>
        I am <span className="font-color-accent">Daniel!</span>
      </h3>
    </div>
    <div
      style={{
        margin: `0 auto`,
        width: 200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <ProfileImage />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
