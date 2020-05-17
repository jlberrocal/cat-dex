import {Action} from 'redux';

const valueFromStorage = localStorage.getItem('state');

const initialState = valueFromStorage === null ? [] : JSON.parse(valueFromStorage);

export function catsReducer(state: any = initialState, {type, payload}: Action & { payload: any }) {
    const newState = [...state];
    switch (type) {
        case 'ADD_CAT':
            payload.id = newState.length + 1;
            newState.push(payload);
            break;
        case 'REMOVE_CAT':
            const index = newState.findIndex(cat => cat.id === payload);
            if (index > -1) {
                newState.splice(index, 1);
            }
            break;
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

    localStorage.setItem('state', JSON.stringify(newState));
    return newState;
}
