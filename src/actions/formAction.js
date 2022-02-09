import { v4 as uuid } from "uuid";
import { SET_CARD, REMOVE_CARD } from './actionTypes';

export const setFormDataAction = (item) => (
    {
        type: SET_CARD,
        payload: item

    });

