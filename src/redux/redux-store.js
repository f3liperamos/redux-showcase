const { createStore } = require('redux')

const actions = {
  INPUT_ACTION: Symbol('INPUT_ACTION'),
  TOGGLE_LIGHT: Symbol('TOGGLE_LIGHT'),
}

function reducer (state = {}, action) {
  return {
    inputValue: inputValueReducer(state.inputValue, action),
    light: lightReducer(state.light, action)
  }
}

function inputValueReducer(state = "", { type, value }) {
  if (type === actions.INPUT_ACTION) return value
  return state
}

function lightReducer(state = true, { type, value }) {
  if (type === actions.TOGGLE_LIGHT) return value
  return state
}

const store = createStore(reducer)

module.exports = {
  actions,
  store
}
