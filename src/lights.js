const { actions, store } = require('./redux/redux-store')

module.exports = function updateLights() {
  const lightState = store.getState().light
  const app = document.querySelector('.app')

  app.classList.toggle('night', !!lightState)
}

document.querySelector('[name=light-switch]').addEventListener('input', function ({ target }) {
  store.dispatch({ type: actions.TOGGLE_LIGHT, value: !target.checked })
})
