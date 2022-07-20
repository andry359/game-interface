import { defaultState } from "./index";

export const pointsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_POINTS":
            return { ...state, points: action.points.points - 1 }
        default:
            return state
    }
};