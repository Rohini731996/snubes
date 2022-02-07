import {v4 as uuid} from "uuid"; 
import { SET_CARD, REMOVE_CARD } from './actionTypes';

export const setCard = (msg, cardType) => (dispatch) => {
    const id = v4();
    dispatch({
        type: SET_CARD,
        payload: { msg, cardType, id },
    });

    // Change the value in the set time out to increase or decrease the time. The default is 10000 which equals 10 seconds
    // Alternativly you can comment out the code below so that the cards just stay on the screen and don't get removed
    setTimeout(() => dispatch({ type: REMOVE_CARD, payload: id }), 10000);
};