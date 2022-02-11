import React from 'react';

import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <MutatingDots color="#00BFFF" secondaryColor="#C70039" height={100} width={110} />
        </div>
    );
};

export default Loader;
