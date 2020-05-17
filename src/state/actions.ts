import {Cat} from '../models/cat';

export const addCat = (cat: Cat) => {
    return {
        type: 'ADD_CAT',
        payload: cat
    }
}

export const removeCat = (id: number) => {
    return {
        type: 'REMOVE_CAT',
        payload: id
    }
}

export const updateCat = (cat: Cat) => {
    return {
        type: 'EDIT_CAT',
        payload: cat
    }
}
