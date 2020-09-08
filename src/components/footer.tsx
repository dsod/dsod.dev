import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()},{` `}
        <a href="https://dsod.dev">Daniel Söderling - Software Developer</a>
      </p>
    </footer>
  )
}

export default Footer
