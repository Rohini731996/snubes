import { SET_USER, SET_USER_LOCATION } from '../actions/actionTypes';

const initialState = {
    Company: '',
    Name: '',
    Phone: '',
    Email: '',
    location: '',
};

export default function (state = initialState, action) {
    const { type, payload, locationPayload } = action;

    switch (type) {
        case SET_USER:
            return {
                ...state,
                payload
            };

        case SET_USER_LOCATION:
            return {
                ...state,
                location: locationPayload,
            }

        default:
            return state;
    }
}