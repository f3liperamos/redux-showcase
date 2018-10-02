module.exports = {
  createStore(storeReducer, preloadedState) {
    let currentReducer = storeReducer
    let currentState = preloadedState ? preloadedState : undefined
    const currentSubscriptions = []

    function getState() {
      return currentState
    }

    function subscribe(listener) {
      currentSubscriptions.push(listener)
    }

    function dispatch(action) {
      currentState = currentReducer(currentState, action)
      currentSubscriptions.forEach(listener => {
        if (listener) listener()
      })
    }

    return {
      dispatch,
      getState,
      subscribe
    }
  }
}
