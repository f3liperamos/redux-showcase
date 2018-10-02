const { actions, store } = require('./redux/redux-store')

const updateMirrorInput = require('./mirror-inputs')
const updateLights = require('./lights')
const watcher = require('./watcher')

store.subscribe(updateMirrorInput)
store.subscribe(updateLights)
store.subscribe(watcher)
