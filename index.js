const redux = require('redux')

const initialState = [
  {
    name: 'First dog',
    isAGoodBoy: true
  }
]

const reducer = (state = initialState, action = {}) => {
    console.log(state, action.payload)
  switch (action.type) {
  case 'ADD_DOG':
    return [
      ...state,
      action.payload
    ]
case 'SET_DOGS':
    const test = action.payload.length === 0 ? [] : action.payload.map(dog => [{...dog}])
    // is payload an empty array? then return array action.payload: []
    // is payload an array of dogs? return an array with a copy  

    return test
  default:
    return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_DOG',
  payload: {
    name: 'Second dog',
    isAGoodBoy: false
  }
}

store.dispatch(action)

const action2 = {
    type: 'SET_DOGS',
    payload: []
  }
  
store.dispatch(action2)

module.exports = { reducer }