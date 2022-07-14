import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OptionsMenu.scss';
import { ReactComponent as Male } from './icons/male.svg';
import { ReactComponent as Woman } from './icons/woman.svg';
import { ReactComponent as Arrow } from './icons/arrow.svg';
import ParametersInfo from './ParametersInfo/ParametersInfo';
import MinorParametersInfo from './MinorParametersInfo/MinorParametersInfo';
import NameCharacter from './NameCharacter/NameCharacter';


function OptionsMenu() {

    const dispatch = useDispatch();
    const objectInfo = useSelector(state => state);

    return (
        <div className="optionsMenu">

            <NameCharacter name={objectInfo.name.name} />
            <div className="mainParameters">
                <div className='optionsMenu__character character'>
                    {objectInfo.name.gender === 'man' ?
                        <Male width='300' height='410' /> :
                        <Woman width='300' height='410' />}
                </div>
                <div className='optionsMenu__options options'>
                    <div className='options__statPoints'>
                        <span>
                            {objectInfo.name.character.points}
                        </span>
                    </div>
                    <div className='options__basicParameters'>
                        <h3 className='title'>Базовые параметры:</h3>
                        <div className="parameters">
                            <ParametersInfo />
                        </div>
                    </div>
                </div>
            </div>

            <div className='minorParameters'>
                <h3 className='title'>Второстепенные параметры:</h3>
                <MinorParametersInfo />
            </div>
            <div className='forward'>
                <Arrow className="arrow" width='30' height='30' />
            </div>
        </div>
    )
};
export default OptionsMenu;