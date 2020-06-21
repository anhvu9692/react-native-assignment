import * as actionTypes from './actionTypes';

export const actFetchTrips = (trips) => ({
  type: actionTypes.FETCH_TRIPS,
  payload: trips,
});

export const actFetchDetails = (details) => ({
  type: actionTypes.FETCH_DETAILS,
  payload: details,
})
