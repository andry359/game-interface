import React from 'react';
import './MenuSkills.scss';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import { Link } from 'react-router-dom';
import SkillComponent from './SkillComponent/SkillComponent';
import SkillsTitle from './SkillsTitle/SkillsTitle';

function MenuSkills() {
    return (
        <div className="optionsSkills skills">

            <div className='skills__title'>
                <SkillsTitle />
            </div>
            <div className='skills__content'>
                <SkillComponent />
            </div>
            <div className='forward'>
                <Link to='/Interface/*'>
                    <Arrow className="arrow" width='30' height='30' />
                </Link>
            </div>
        </div>
    )
};
export default MenuSkills;