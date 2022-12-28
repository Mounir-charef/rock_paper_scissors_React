import React, {useContext} from 'react';
import {UserContext} from "../App.jsx";

function Result() {
    const setGame = useContext(UserContext)
    return (
        <div>
            <button onClick={() => setGame(oldGame => !oldGame)}>
                click me 2
            </button>
        </div>
    );
}

export default Result;