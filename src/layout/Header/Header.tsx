import PropTypes from "prop-types"
import React from "react"
import ProfileImage from "../../components/Images/ProfileImage"
import "styles/components/header.scss"

const Header = () => (
  <header className="d-flex align-items-center">
    <div className="row">
      <div className="col-8 col-sm-4 d-flex justify-content-center flex-column title">
        <h1>Hi.</h1>
        <h2>
          I am <span className="font-color-accent">Daniel!</span>
        </h2>
      </div>
      <div className="col-8 col-sm-4">
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
