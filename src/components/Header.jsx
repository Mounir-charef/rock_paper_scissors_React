import React from "react";

function Header() {
    return (
        <div id='header' aria-label='score' className='flex w-2/5 items-center my-20 mx-auto p-6 border-4 border-white border-opacity-40 rounded-2xl w-fit text-4xl text-white'>
            <div className='flex-1'>
                <h3>Score</h3>
                <h3>Score</h3>
                <h3>Score</h3>
            </div>

            <div className=' flex-1 text-end justify-self-end '>
                <h3> Alger </h3>
            </div>
        </div>
    );
}

export default Header;