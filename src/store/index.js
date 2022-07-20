import { createStore, combineReducers } from 'redux';
import { nameReducer } from './nameReducer';
import { genderReducer } from './genderReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pointsReducer } from './pointsReducer';

export const defaultState = {
    name: '',
    character: {
        gender: 'man',
        points: 25,
        basicParameters: [
            { id: 1, parameters: 'Сила', point: 0 },
            { id: 2, parameters: 'Ловкость', point: 0 },
            { id: 3, parameters: 'Интелект', point: 0 },
            { id: 4, parameters: 'Харизма', point: 0 },
        ],
        minorParameters: [
            { id: 1, parameters: 'Жизненная сила', point: 3 },
            { id: 2, parameters: 'Уклонение', point: 10 },
            { id: 3, parameters: 'Энергичность', point: 0 },
        ],
    }
};

const rootReducer = combineReducers({
    name: nameReducer,
    gender: genderReducer,
    points: pointsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());