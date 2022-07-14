import { defaultState } from "./index";

export const strengthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_STRENGTH":
            return { ...state, strength: action.strength.character.basicParameters.id }
        default:
            return state
    }
};