import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import Board from "./components/Board.jsx";
import Result from "./components/Result.jsx";
import Button from "./components/Button.jsx";
import Rules from "./components/Rules.jsx";

function App() {
    const [winner, setWinner] = useState({}),
        [score, setScore] = useState(0),
        [opacity, setOpacity] = useState(false);

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
             botMove: getKeyByValue(plays, botMove),
         })
         if(result === 1){
             setWinner({
                 message: 'YOU WON!!',
                 move: move,
                 botMove: getKeyByValue(plays, botMove),
             });
             setScore(oldScore => oldScore+1);
         }
         if(result === 2){
             setWinner({
                 message: 'YOU LOST BOII!',
                 move: move,
                 botMove: getKeyByValue(plays, botMove),
             })
             setScore(oldScore => oldScore-1);
         }

    }


    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }


    return (
        <main className='flex h-screen flex-col items-center justify-evenly overflow-hidden'>
            <Header score={score}/>
            {isObjectEmpty(winner)?
                <Board checkWinner={checkWinner}/> :
                <Result winner={winner} replay={() => setWinner({})}/>
            }
            <Button px='px-8' absolute={true} onClick={() => setOpacity(oldOp => !oldOp)}>
                RULES
            </Button>
            <Rules opacity={opacity} onClick={() => setOpacity(oldOp => !oldOp)}/>
        </main>
    );
}

export default App;