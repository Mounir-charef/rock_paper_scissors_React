import React from 'react';

function Button({children}) {
    return (
        <button className='text-white py-1 px-8 text-lg font-semibold self-end border-2 border-white rounded-md
         absolute bottom-0 transition hover:bg-white hover:text-DarkText -translate-x-2 -translate-y-2'>
            {children}
        </button>
    );
}

export default Button;