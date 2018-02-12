const initialState = {
  army: []
}

const reducer = (state = initialState,action) => {
  if (action.type == "SPAWN_KITTEN") {
    return {
      ...state,
      army: [...state.army, action.newKitten]
    }
  }
  
  return state
}
