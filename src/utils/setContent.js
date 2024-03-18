import Spiner from '../spiner/spiner';

const setContent = (proces, Component, data) => {
    switch (proces) {
        case 'waiting':
            return <Component data={data}/>;
        case 'loading':
            return <Spiner/>;
        case 'confirmed': 
            return <Component data={data}/>;
        case 'error':
            return;
        default:
            throw new Error('Unexpected srate proces')
    }
}

export default setContent;