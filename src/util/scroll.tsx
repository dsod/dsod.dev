const scrollToElement = (element: HTMLElement): void => {
  element.focus({ preventScroll: true })
  element.scrollIntoView({
    behavior: "smooth",
  })
}

const elementInMiddleOfViewport = (element: HTMLElement): boolean => {
  const middleOfViewport = window.innerHeight / 2
  const rect = element.getBoundingClientRect()
  const isInMiddleOfViewport =
    rect.top <= middleOfViewport && rect.bottom >= middleOfViewport
  return isInMiddleOfViewport
}

export { scrollToElement, elementInMiddleOfViewport }
