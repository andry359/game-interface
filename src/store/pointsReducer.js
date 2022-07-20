import { defaultState } from "./index";
// тут нужно исправить ошибку
export const pointsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_STRENGTH":
            console.log(state);
            return { ...state, points: action.points.points }
        default:
            return state
    }
};