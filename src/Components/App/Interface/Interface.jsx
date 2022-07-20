import React from 'react';
import './Interface.scss';
import { Routes, Route } from 'react-router-dom'
import MenuParameters from './MenuParameters/MenuParameters';
import MenuSkills from './MenuSkills/MenuSkills';

function Interface() {

    return (
        <div className="interface">
            <Routes>
                <Route path=':MenuParameters' element={<MenuParameters />} />
                <Route path='*/MenuSkills' element={<MenuSkills />} />
            </Routes>
        </div>
    )
};
export default Interface;