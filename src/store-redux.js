const { createStore } = require('redux')

const actions = {
  INPUT_ACTION: Symbol('INPUT_ACTION'),
  TOGGLE_LIGHT: Symbol('TOGGLE_LIGHT'),
}

const store = createStore(function (state = {}, { type, value }) {
  if (actions.INPUT_ACTION) return { ...state, value }
  if (actions.TOGGLE_LIGHT) return { ...state, light: value ? 'on':'off' }
  return state
})

module.exports = { store, actions }
