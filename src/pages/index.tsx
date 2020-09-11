import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import About from "../components/about"
import Experience from "../components/experience"
import Skills from "../components/Skills/skills"
import Projects from "../components/projects"

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
