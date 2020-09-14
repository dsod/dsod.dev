import React, { useEffect, useState } from "react"
import Experiences from "../../../content/experiences.json"
import { elementInMiddleOfViewport } from "../../../util/scroll"
import ListIcon from "images/icons/list-item.svg"

type TimelineScrollState = {
  element: HTMLElement
  middleOfViewport?: boolean
  active: boolean
  changeCssState: boolean
}[]

const Timeline: React.FC = () => {
  useEffect(() => {
    const wrapper = document.getElementById("timeline")
    const sections = wrapper?.getElementsByClassName("timeline-section")
    const timelineSections = Array.prototype.map.call(sections, section => ({
      element: section,
      middleOfViewport: false,
      active: false,
      changeCssState: false,
    })) as TimelineScrollState
    window.addEventListener(
      "scroll",
      () => handleScrollTimer(timelineSections),
      {
        passive: true,
      }
    )

    return window.removeEventListener("scroll", () =>
      handleScrollTimer(timelineSections)
    )
  }, [])

  let timer: number
  const handleScrollTimer = (timelineSections: TimelineScrollState) => {
    if (timer) {
      window.clearTimeout(timer)
    }

    timer = window.setTimeout(() => handleScroll(timelineSections), 50)
  }

  const handleScroll = (timelineSections: TimelineScrollState) => {
    timelineSections.map(timeline => {
      const cacheMiddleOfViewport = timeline.middleOfViewport
      timeline.middleOfViewport = elementInMiddleOfViewport(timeline.element)
      timeline.changeCssState =
        cacheMiddleOfViewport != timeline.middleOfViewport
    })
    const changeStateOn = timelineSections.filter(
      section => section.changeCssState
    )
    if (changeStateOn.length) {
      changeStateOn.forEach(section => {
        if (section.active) {
          section.element.classList.remove("active")
        } else {
          section.element.classList.add("active")
        }
        section.active = !section.active
      })

      const indexOfActiveSection = timelineSections.findIndex(
        section => section.active
      )

      const timeline = document.getElementsByClassName("timeline-active")[0]
      const secondClass = timeline.classList.item(1)
      secondClass ? timeline.classList.remove(secondClass) : null
      indexOfActiveSection >= 0
        ? timeline.classList.add(`active-${indexOfActiveSection + 1}`)
        : null
    }
  }

  return (
    <div id="timeline" className="timeline-wrapper">
      {Experiences.map((data, index) => {
        let style: string
        index % 2 === 0
          ? (style = "timeline-section timeline-section-right")
          : (style = "timeline-section timeline-section-left")
        return (
          <div key={`experience_${index}`} className={style}>
            <h5>{data.role}</h5>
            <ul className="learnings">
              {data.learnings.map(learning => {
                return (
                  <li>
                    <ListIcon />
                    {learning}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
      <div className={`timeline timeline-height-${Experiences.length}`}></div>
      <div className={`timeline-active`}>
        <div className="center"></div>
      </div>
    </div>
  )
}
export default Timeline
