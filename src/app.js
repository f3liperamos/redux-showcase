const input = require('./input')
const {store, actions} = require('./store-redux')

const inputEventListeners = {
  input(event) {
    store.dispatch({
      type: actions.INPUT_ACTION,
      value: event.target.value
    })
  },
  change(event) {
    store.dispatch({
      type: actions.INPUT_ACTION,
      value: event.target.value
    })
  }
}

const Input1 = input
  .createElementWith({
    attributes: { autofocus: true, type: 'text' },
    eventListeners: inputEventListeners,
    className: 'input'
  })
  .renderInto(window.document.body)

const Input2 = input
  .createElementWith({
    attributes: { autofocus: true, type: 'text' },
    className: 'input2'
  })
  .renderInto(window.document.body)

function updateView () {
  Input2.element.value = store.getState().value.split('').reverse().join('')
}

store.subscribe(updateView)
