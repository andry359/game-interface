import './MinorParametersInfo.scss';
import { useDispatch, useSelector } from 'react-redux';

function MinorParametersInfo() {

    const dispatch = useDispatch();
    const objectInfo = useSelector(state => state);
    const arrayParameters = objectInfo.name.character.minorParameters;
    console.log(arrayParameters);
    const parameters = arrayParameters.map((item) => {
        return (
            <div className='minorParametersContent' key={item.id}>
                <span className='parameters__name'>
                    {item.parameters}:
                </span>
                <span className='points'>
                    {item.point}
                </span>
            </div>
        )
    });

    return (
        <>
            {parameters}
        </>
    )
};
export default MinorParametersInfo;