import PlayButton from "./PlayButton.jsx";
function Board({checkWinner}) {
    return (
        <div className='image-wrap grid grid-cols-2  justify-between content-between h-60  aspect-square mt-5 md:h-80 xl:h-1/2'>
            <PlayButton play={'PAPER'} onClick={checkWinner} className='-translate-y-1/3 -translate-x-1/3 w-24 md:w-32 xl:w-36 lr:w-60' />
            <PlayButton play={'SCISSORS'} onClick={checkWinner} className='-translate-y-1/3 translate-x-1/3 border-yellow-500  justify-self-end w-24 md:w-32 xl:w-36 lr:w-60'/>
            <PlayButton play={'ROCK'} onClick={checkWinner} className='col-start-1 col-end-3 justify-self-center w-24 md:w-32 xl:w-36 lr:w-60' />
        </div>
    );
}

export default Board;