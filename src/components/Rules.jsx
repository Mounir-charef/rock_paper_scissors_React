import React from 'react';

function Rules({children}) {
    return (
        <button className='text-white py-1 px-8 self-end border-2 border-white rounded-md
         absolute bottom-0 -translate-x-2 -translate-y-2'>
            {children}
        </button>
    );
}

export default Rules;