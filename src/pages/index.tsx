import React from "react"

import Layout from "../layout/Layout"
import SEO from "../components/SEO"
import "../styles/index.scss"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Daniel Söderling - Portfolio" />
    <About />
    <Experience />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
