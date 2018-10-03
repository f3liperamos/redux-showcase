require('./watcher')

const { store } = require('./redux/redux-store')

window.document.querySelector('.add-task-button').addEventListener('click', function () {
  const inputElement = window.document.querySelector('.add-task-input')
  store.dispatch({ type: 'ADD_TASK', task: inputElement.value })
})
