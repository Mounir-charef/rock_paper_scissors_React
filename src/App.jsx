import React, {useState,useEffect } from 'react';
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";
import Result from "./components/Result.jsx";
import Button from "./components/Button.jsx";

export const UserContext = React.createContext(null);

function App() {
    const [game, setGame] = useState(true);
    const [score, setScore] = useState(13);
    const plays = Object.freeze({
        ROCK: 1,
        PAPER: 2,
        SCISSORS: 3
    })

    const checkWinner = move => {
        let keys = Object.keys(plays);
         const bot_move =plays[keys[ Math.floor(Math.random() * keys.length)]];
         const result = (3 + plays[move] - bot_move) % 3
        if(result === 0) return 'draw'
        if(result === 1) return 'YOU WON!'
        if(result === 2) return 'YOU LOST BOI!'
    }

    return (
        <main className='flex min-h-screen flex-col items-center gap-20'>
            <Header score={score}/>
            <UserContext.Provider value={checkWinner}>
                {game?
                    <Board /> :
                    <Result />
                }
            </UserContext.Provider>
            <Button >
                RULES
            </Button>
        </main>
    );
}

export default App;