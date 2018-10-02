const { createStore } = require('redux')

const actions = {
  INPUT_ACTION: Symbol('INPUT_ACTION'),
  TOGGLE_LIGHT: Symbol('TOGGLE_LIGHT'),
}

function reducer (state = {}, { type, value }) {
  if (type === actions.INPUT_ACTION) return { ...state, inputValue: value }
  if (type === actions.TOGGLE_LIGHT) return { ...state, light: value }
  return state
}

const store = createStore(reducer)

module.exports = {
  actions,
  store
}
