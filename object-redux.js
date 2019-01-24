const redux = require('redux')

const initialState = {
    firstName: 'Charles',
    lastName: 'Eamnes',
    age: 75
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return {
                ...state,
                firstName: action.payload
            }
        case 'SET_LAST_NAME':
            return {
                ...state,
                lastName: action.payload
            }
        case 'SET_AGE':
            return {
                ...state,
                age: action.payload
            }    
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
    type: 'SET_FIRST_NAME',
    payload: 'Alice'
}

store.dispatch(action)

const action2 = {
    type: 'SET_LAST_NAME',
    payload: 'Smith'
}

store.dispatch(action2)

const action3 = {
    type: 'SET_AGE',
    payload: '30'
}

store.dispatch(action3)

module.exports = { reducer }