export const ADD_FLOWER = "ADD_FLOWER"
export const LOAD_FLOWER_LIST = "LOAD_FLOWER_LIST"

export const loadFlowers = (flowers) => {
  console.log(flowers)
  return {
    type : LOAD_FLOWER_LIST,
    flowers : flowers
  }
}

export const loadFlowerList = () => {
  return dispatch => {

    let url = 'https://flowers.vapor.cloud/flowers'
    fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadFlowers(json)))
  }
}

export const addFlower = (flower) => {
  return {
    type: ADD_FLOWER,
    flower: flower
  }
}
