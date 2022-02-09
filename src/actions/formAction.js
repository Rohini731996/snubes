import { SET_USER, SET_USER_LOCATION } from './actionTypes';

export const setFormDataAction = (item) => (
    {
        type: SET_USER,
        payload: item

    });

export const setUserLocationAction = (item) => (
    {
        type: SET_USER_LOCATION,
        locationPayload: item

    });

