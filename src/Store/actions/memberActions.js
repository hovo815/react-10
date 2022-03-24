import { memberTypes } from '../types';

 const add = (payload) => {
    return {
        type: memberTypes.ADD,
        payload: payload
    }
}

const deletee = (payload) => {
    return {
        type: memberTypes.DELETE,
        payload: payload
    }
} 


export { add, deletee };