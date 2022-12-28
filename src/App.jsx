import React, {useState,useEffect } from 'react';
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";
import Result from "./components/Result.jsx";
import Rules from "./components/Rules.jsx";

export const UserContext = React.createContext(null);

function App() {
    const [game, setGame] = useState(true);
    const [score, setScore] = useState(13);
    const plays = Object.freeze({
        ROCK: 'rock',
        PAPER: 'paper',
        SCISSORS: 'scissors'
    })

    const checkWinner = () => {
        let keys = Object.keys(plays);
         alert(plays[keys[ Math.floor(Math.random() * keys.length)]]);
    }

    return (
        <main className='flex flex-col items-center gap-20'>
            <Header score={score}/>
            <UserContext.Provider value={checkWinner}>
                {game?
                    <Board /> :
                    <Result />
                }
            </UserContext.Provider>
            <Rules />
        </main>
    );
}

export default App;