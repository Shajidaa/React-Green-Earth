import React from 'react';
import { PropagateLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className=' min-h-dvh flex justify-center items-center'>
            <PropagateLoader color={'green'}></PropagateLoader>
        </div>
    );
};

export default LoadingSpinner;