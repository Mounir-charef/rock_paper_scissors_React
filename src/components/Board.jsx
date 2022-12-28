import React, {useContext} from 'react';
import {UserContext} from "../App.jsx";

function Board() {
    const setGame = useContext(UserContext)
    return (
        <div className='image-wrap w-10/12 lg:w-1/2 h-60 lg:h-80 mt-20'>
        </div>
    );
}

export default Board;