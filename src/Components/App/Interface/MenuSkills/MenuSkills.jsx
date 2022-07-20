import React from 'react';
import './MenuSkills.scss';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import { Link } from 'react-router-dom';

function MenuSkills() {
    return (
        <div className="optionsSkills">

            {/* ToDo: сделать позже */}

            <div className='forward'>
                <Link to='/Interface/*'>
                    <Arrow className="arrow" width='30' height='30' />
                </Link>
            </div>
        </div>
    )
};
export default MenuSkills;