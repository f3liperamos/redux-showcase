const { createStore } = require('redux')

const INPUT_ACTION = Symbol('INPUT_ACTION')

const store = createStore(function (state = {}, { type, value }) {
  if (INPUT_ACTION) return { ...state, value }
  return state
})

module.exports = {
  store,
  actions: {
    INPUT_ACTION
  }
}



