import React from 'react';
import './ModalGreetings.scss';
import { Link } from 'react-router-dom';

function ModalGreetings() {

    return (
        <div className="modal">
            <div className='main__content main-content'>
                <div className='main-content__text'>
                    <p>Приветствую тебя путник! Кажется настал час создать своего героя</p>
                </div>
                <div className='main-content__button'>
                    <Link to='characterCreation'>
                        <button type='submit'>
                            Создать персонажа
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default ModalGreetings;