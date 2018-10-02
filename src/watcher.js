const { store } = require('./redux/redux-store')

function stateWatch () {
  const stateWatcher = document.querySelector('.current-state')
  stateWatcher.textContent = JSON.stringify(store.getState(), null, 2)
}

module.exports = stateWatch
