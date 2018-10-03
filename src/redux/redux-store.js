const { createStore } = require('./redux')

const initialState = {
  taskList: []
}

function reducer (state = initialState, action) {
  if (action.type === 'ADD_TASK') {
    return {
      taskList: state.taskList.concat({ name: action.task })
    }
  }

  return state
}

function inputValueReducer(state = "", { type, value }) {
  if (type === actions.INPUT_ACTION) return value
  return state
}

// function lightReducer(state = true, { type, value }) {
//   if (type === actions.TOGGLE_LIGHT) return value
//   return state
// }

const store = createStore(reducer, { taskList: ["this.state"] })

module.exports = { store }
