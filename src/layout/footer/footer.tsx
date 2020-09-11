import React from "react"
import LinkedinIcon from "images/icons/linkedin-icon.svg"

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row mb-3">
        <LinkedinIcon />
      </div>
      <div className="row justify-content-center">
        <p>
          © {new Date().getFullYear()},{` `}
          <a href="https://dsod.dev">Daniel Söderling - Software Developer</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
