import React from 'react';

// Gif
import spinner from "../gif/spinner.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" />
            <h1 style={{color:'#3b3b3b'}} >Loading ...</h1>
        </div>
    );
};

export default Loader;