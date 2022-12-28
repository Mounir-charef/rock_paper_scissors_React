import React from "react";

function Header({score}) {
    return (
        <div id='header' aria-label='score' className='flex w-10/12 lg:w-1/2 font-bold justify-between
         items-center my-10 p-3 md:p-6 mb-0 border-4 border-white border-opacity-40 rounded-2xl text-white'>
            <div className='leading-extraSmall text-3xl md:text-4xl md:leading-extraSmall '>
                <h3>ROCK</h3>
                <h3>PAPER</h3>
                <h3>SCISSOR</h3>
            </div>

            <div className='flex flex-col w-20 md:w-28 justify-self-end text-DarkText bg-white
            text-center px-1.5 py-2 md:px-2.5 md:py-2 rounded items-center '>
                <p className='text-sm'> score </p>
                <h3 className='text-2xl md:text-5xl'>{score}</h3>
            </div>
        </div>
    );
}

export default Header;