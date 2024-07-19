import React from 'react';
import {Spinner} from "@nextui-org/react";

const Loading = () => {
    return (
        <div className='flex items-center justify-center vertical-center'>
            <Spinner label='Loading...' color='secondary' labelColor='secondary'/>
        </div>
    );
};

export default Loading;