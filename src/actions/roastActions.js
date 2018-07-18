import * as types from './actionTypes'

export const loadRoastsSuccess = (roasts) => {
  return {type: types.LOAD_ROAST_SUCCESS, roasts}
}
export const createRoastsSuccess = (roast) => {
  return {type: types.CREATE_ROAST_SUCCESS, roast}
}

export const initializeRoasts = () => {
  const defaultRoasts = [
    'espresso',
    'dark',
    'medium',
    'light',
    'blonde'
  ]

  return (dispatch) => {
    dispatch(loadRoastsSuccess(defaultRoasts));
  }
}