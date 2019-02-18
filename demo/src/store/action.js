
import { ADD, REMOVE } from './types';

export function add (data) {
    return {
        type: ADD,
        payload: data
    }
}

export function remove(data) {
    return {
        type: REMOVE,
        payload: data
    }
}