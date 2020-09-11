import PropTypes from "prop-types"
import React from "react"
import ProfileImage from "components/Images/ProfileImage"
import ListIcon from "images/icons/list-item.svg"

const Header = () => (
  <header className="d-flex align-items-center">
    <div className="container">
      <div className="header-wrapper">
        <div className="title col-5 col-md-4 col-lg-4">
          <div className="row">
            <div className="col-8">
              <h1>Hi.</h1>
            </div>
            <div className="col-8">
              <h2>
                I am <span className="font-color-accent">Daniel!</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="lead-wrapper col-5 col-lg-4">
          <div className="col-lg-8">
            <p className="lead">Software development is my newfound passion</p>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <h5 className="card-header">Positions of interrest</h5>
              <div className="card-body">
                <ul>
                  <li>
                    <ListIcon />
                    Product Management
                  </li>
                  <li>
                    <ListIcon />
                    Full-stack Software Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="picture col-5 col-lg-4">
          <ProfileImage />
        </div>
      </div>
    </div>
  </header>
)

export default Header
