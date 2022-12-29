import {useContext} from 'react';
import {UserContext} from "../App.jsx";
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"
import PlayButton from "./PlayButton.jsx";
function Board() {
    const setGame = useContext(UserContext)
    return (
        <div className='image-wrap grid grid-cols-2  justify-between content-between h-60  aspect-square
         mt-5 md:h-80'>
            <PlayButton image={paper} play={'paper'} transN={true}  className='-translate-y-1/3 -translate-x-1/3 border-blue-500 ' />
            <PlayButton image={scissors} play={'scissors'}  className='-translate-y-1/3 translate-x-1/3 border-yellow-500  justify-self-end '/>
            <PlayButton image={rock} play={'rock'} className='border-red-500 col-start-1 col-end-3 justify-self-center ' />
        </div>
    );
}

export default Board;