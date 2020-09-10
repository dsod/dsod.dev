import PropTypes from "prop-types"
import React from "react"
import ProfileImage from "../../components/Images/ProfileImage"
import "styles/components/header.scss"

const Header = () => (
  <header className="d-flex align-items-md-center">
    <div className="row">
      <div className="col-8 col-md-4 d-flex flex-column justify-content-center title">
        <h1>Hi.</h1>
        <h2>
          I am <span className="font-color-accent">Daniel!</span>
        </h2>
      </div>
      <div className="col-8 col-md-4">
        <ProfileImage />
      </div>
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
