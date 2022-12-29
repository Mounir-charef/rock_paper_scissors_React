import {useContext} from 'react';
import {UserContext} from "../App.jsx";
import PlayButton from "./PlayButton.jsx";
function Board() {
    const setGame = useContext(UserContext)
    return (
        <div className='image-wrap grid grid-cols-2  justify-between content-between h-60  aspect-square
         mt-5 md:h-80'>
            <PlayButton play={'paper'} transN={true}  className='-translate-y-1/3 -translate-x-1/3' />
            <PlayButton play={'scissors'}  className='-translate-y-1/3 translate-x-1/3 border-yellow-500  justify-self-end '/>
            <PlayButton play={'rock'} className='col-start-1 col-end-3 justify-self-center ' />
        </div>
    );
}

export default Board;