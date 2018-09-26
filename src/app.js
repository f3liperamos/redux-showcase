const { store, actions } = require('./store-redux')
const createElement = require('./create-element')

const Container = createElement({ element: 'div', className: 'container' })
const H1 = createElement({ element: 'h1', className: 'title' })
H1.textContent = generateTitle()

const Input1 = createElement({
  element: 'input',
  attributes: { autofocus: true, type: 'text' },
  className: 'input',
  eventListeners: {
    input(event) {
      store.dispatch({
        type: actions.INPUT_ACTION,
        value: event.target.value
      })
    }
  }
})

const Input2 = createElement({
  element: 'input',
  attributes: { type: 'text' },
  className: 'input2'
})

console.log(Input1)

function updateView() {
  const inputValue = store.getState().value

  Input2.value = inputValue.split('').reverse().join('')
  H1.textContent = generateTitle(inputValue)
}

store.subscribe(updateView)

function generateTitle(value) {
  return !value ? 'YARL.js' : `Hello, ${value}`
}

Container.appendChild(H1)
Container.appendChild(Input1)
Container.appendChild(Input2)



window.document.body.appendChild(Container)
