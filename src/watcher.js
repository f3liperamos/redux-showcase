const { store } = require('./redux/redux-store')

function stateWatch () {
  const stateWatcher = document.querySelector('.state')
  stateWatcher.textContent = JSON.stringify(store.getState(), null, 2)
}

store.subscribe(stateWatch)
stateWatch()

module.exports = stateWatch
