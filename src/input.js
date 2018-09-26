const createElement = require('./create-element')

module.exports = {
  createElementWith({ attributes, eventListeners, className }) {
    this.element = createElement({
      element: 'input',
      attributes,
      eventListeners,
      className
    })

    return this
  },
  renderInto(DOMNode) {
    DOMNode.appendChild(this.element)
    return this
  }
}
