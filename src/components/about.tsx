import React from "react"
import SectionHeader from "./sectionHeader"

const About = () => (
  <section className="container">
    <div className="row justify-content-center">
      <div className="col-6 col-md-5 col-lg-4">
        <SectionHeader section="About" />

        <p>When not online, I am based in Stockholm, Sweden.</p>

        <p>
          I have extensive experience in technical project management,
          consultancy and system integrations.
        </p>
        <p>
          For the last couple of years I have been self-studying software
          development on the side of my full-time position at a software
          company.
        </p>

        <p>
          While not coding day-to-day at work, I've accumulated knowledge about
          software development from a market, sales and customer perspective.
        </p>

        <p>
          When my responsibilities grew closer to software development, I
          realized that this is what I want to do.
        </p>

        <p>
          For the last couple of months I have been self-studying software
          development full time.
        </p>
      </div>
    </div>
  </section>
)

export default About
