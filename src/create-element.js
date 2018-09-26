module.exports = function createElement({ element, attributes = {}, eventListeners, className }) {
  const elementDOMNode = window.document.createElement(element)
  Object.entries(attributes).forEach(mapAttribute, { element: elementDOMNode })

  if (eventListeners) {
    Object.entries(eventListeners).forEach(bindListeners, { element: elementDOMNode })
  }

  if (className) {
    elementDOMNode.classList.add(className)
  }

  return elementDOMNode
}

function mapAttribute([attribute, value]) {
  this.element.setAttribute(attribute, value)
}

function bindListeners([listener, value]) {
  this.element.addEventListener(listener, value)
}
