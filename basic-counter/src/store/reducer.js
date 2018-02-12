
const initialState = {
  counter : 123,
  firstName : 'john',
  lastName : 'Doe',
  tasks : []
}

const reducer = (state = initialState,action) => {

  if(action.type == "INC_COUNTER") {
    return {
      ...state,
      counter : state.counter + 1
    }
  }

  else if(action.type == "DEC_COUNTER") {

    return {
      ...state,
      counter : state.counter - 1
    }
  }

  else if(action.type == "INC_COUNTER_BY_5") {
    return {
      ...state,
      counter: state.counter + 5
    }
  }

  else if(action.type == "DEC_COUNTER_BY_5") {
    return {
      ...state,
      counter: state.counter - 5
    }
  }

  return state
}

export default reducer
