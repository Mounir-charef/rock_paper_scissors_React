import PlayButton from "./PlayButton.jsx";
import Button from "./Button.jsx";

function Result({winner}) {
    return (
        <div className='w-10/12 flex justify-around items-center'>
            <PlayButton play={winner.move} className='w-28 md:w-36' />
            <div className='flex flex-col text-center gap-5'>
                <h3> {winner.message} </h3>
                <Button px='px-12' >
                    play again
                </Button>
            </div>
            <PlayButton play={winner.botMove} className='w-28 md:w-36' />
        </div>
    );
}

export default Result;