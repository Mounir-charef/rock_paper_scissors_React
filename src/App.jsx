import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";
import Result from "./components/Result.jsx";
import Button from "./components/Button.jsx";

export const UserContext = React.createContext(null);

function App() {
    const [winner, setWinner] = useState({});
    const [score, setScore] = useState(13);
    const plays = Object.freeze({
        ROCK: 1,
        PAPER: 2,
        SCISSORS: 3
    })

    const checkWinner = move => {
         let keys = Object.keys(plays);
         const botMove =plays[keys[ Math.floor(Math.random() * keys.length)]];
         let result = (3 + plays[move] - botMove) % 3
         if(result === 0) setWinner({
                message: 'draw',
                move: move,
                botMove: getKeyByValue(plays, botMove)
            })
         if(result === 1) setWinner({
            message: 'YOU WON!!',
            move: move,
            botMove: getKeyByValue(plays, botMove)
        })
         if(result === 2) setWinner({
            message: 'YOU LOST BOII!',
            move: move,
            botMove: getKeyByValue(plays, botMove)
        })
    }

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }


    return (
        <main className='flex h-full flex-col items-center gap-28 md:gap-20 overflow-hidden'>
            <Header score={score}/>
            {isObjectEmpty(winner)?
                <Board checkWinner={checkWinner}/> :
                <Result winner={winner}/>
            }
            <Button px='px-8' absolute={true}>
                RULES
            </Button>
        </main>
    );
}

export default App;