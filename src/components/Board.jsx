import React, {useContext} from 'react';
import {UserContext} from "../App.jsx";

function Board() {
    const setGame = useContext(UserContext)
    return (
        <div className='image-wrap'>
            <button onClick={() => setGame(oldGame => !oldGame)}>
                click me 2
            </button>
        </div>
    );
}

export default Board;