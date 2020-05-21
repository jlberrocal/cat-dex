import {Action} from 'redux';
import {Cat} from '../models/cat';

const valueFromStorage = localStorage.getItem('state');
const initialState = valueFromStorage === null ? [] : JSON.parse(valueFromStorage);

export function catsReducer(state: Cat[] = initialState, {type, payload}: Action & { payload: any }) {
    const newState = [...state];
    switch (type) {
        case 'ADD_CAT':
            payload.id = newState.length + 1;
            newState.push(payload);
            break;
        case 'REMOVE_CAT':
            return  state.filter(cat => cat.id !== payload.id);
        case 'EDIT_CAT':
            let cat = newState.find(cat => cat.id === payload.id);
            if (cat !== null) {
                cat = {
                    ...cat,
                    ...payload
                };
            }
            break;
        default:
            return newState;
    }

    return newState;
}
