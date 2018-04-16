
import * as actionTypes from './actions'

const initialState = {
  flowers: []
}

const reducer = (state = initialState,action) => {

  switch(action.type) {

    case actionTypes.ADD_FLOWER:
      return [
        ...state,
        {
          name: action.payload.name,
          description: action.payload.description,
          imageURL: action.payload.imageURL
        }
    ]

    case actionTypes.LOAD_FLOWER_LIST:
      return {
        ...state,
        flowers : action.flowers
      }

    default:
      return state

  }
}

export default reducer
