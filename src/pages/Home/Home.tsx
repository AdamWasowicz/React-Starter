import React from 'react';
import './style.scss';
import useHome from './useHome';


const Home: React.FunctionComponent = () => {
    // Custom hook
    const {} = useHome();

    return (
        <div className='Home'>
            Home
        </div>
    );
};

export default Home;