import * as actionTypes from '../actions/actionTypes';

const initialState = {
  trips: [],
  details: {},
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRIPS:
      const trips = action.payload;
      return state = {
        ...state,
        trips,
      };
    case actionTypes.FETCH_DETAILS:
      const details = action.payload;
      return state = {
        ...state,
        details,
      };
    default:
      return state;
  }

};

export default tripReducer;
