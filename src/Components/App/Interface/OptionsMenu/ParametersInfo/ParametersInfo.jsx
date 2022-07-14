import './ParametersInfo.scss';
import { useDispatch, useSelector } from 'react-redux';

function ParametersInfo() {

    const dispatch = useDispatch();
    const objectInfo = useSelector(state => state);
    const arrayParameters = objectInfo.name.character.basicParameters;
    console.log(arrayParameters);

    // const addStrrength = () => {

    // }

    const parameters = arrayParameters.map((item) => {
        return (
            <div className="parameters__content" key={item.id}>
                <div className="block__info">
                    <span className='parameters__name'>
                        {item.parameters}:
                    </span>
                    <span className='points'>
                        {item.point}
                    </span>
                </div>
                <div className="block__bar bar">
                    <div className='bar__button'>
                        <a href="#">-</a>
                    </div>
                    <div className='bar'></div>
                    <div className='bar__button'>
                        <a href="#">+</a>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
            {parameters}
        </>
    )
};
export default ParametersInfo;