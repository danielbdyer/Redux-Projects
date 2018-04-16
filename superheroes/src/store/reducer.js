
import * as actionTypes from './actions'

const initialState = {
  movies : []
}

const reducer = (state = initialState,action) => {

  switch(action.type) {

    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        results : state.results.concat(action.value)
        }

    default:
      return state
  }
};

export default reducer
