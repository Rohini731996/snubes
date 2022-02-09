import { SET_CARD, REMOVE_CARD } from '../actions/actionTypes';

const initialState = {
    Company: '',
    Name: '',
    Phone: '',
    Email: ''
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CARD:
            return {
                payload
            };
        default:
            return state;
    }
}