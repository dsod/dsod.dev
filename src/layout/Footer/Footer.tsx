import React from "react"

import "styles/components/footer.scss"

const Footer = () => {
  return (
    <footer className="container-fluid d-flex justify-content-center align-items-end">
      <p>
        © {new Date().getFullYear()},{` `}
        <a href="https://dsod.dev">Daniel Söderling - Software Developer</a>
      </p>
    </footer>
  )
}

export default Footer
