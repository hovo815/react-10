import { memberTypes } from "../types"

export default function memberReducer(state = [], action) {
    switch (action.type) {
        case memberTypes.ADD:
            return [
                ...action.payload
            ]
        default: return state
    }

}