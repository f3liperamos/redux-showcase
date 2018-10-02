const { actions, store } = require('./redux/redux-store')

module.exports = function updateMirrorInput () {
  const inputState = (store.getState().inputValue || '').split('').reverse().join('')

  const mirrorInput = document.querySelector('[name=mirror-input]')
  const mainInput = document.querySelector('[name=main-input]')

  if (!inputState.trim()) return mirrorInput.value = ''
  mainInput.value = store.getState().inputValue
  mirrorInput.value = inputState + " :)"
}

document.querySelector('[name=main-input]').addEventListener('input', function ({ target }) {
  store.dispatch({ type: actions.INPUT_ACTION, value: target.value })
})
