import PlayButton from "./PlayButton.jsx";
import Button from "./Button.jsx";

function Result({winner, replay}) {
    return (
        <div className='w-10/12 lg:w-1/2 grid medium:grid-cols-2 grid-cols-3 place-items-center'>
            <PlayButton play={winner.move} className='w-36 small:w-28' />
            <div className=' flex flex-col text-center gap-5 items-center
            medium:row-start-2 medium:col-start-1 medium:col-end-3 medium:mt-10'>
                <h3 className='text-4xl text-white font-bold'> {winner.message} </h3>
                <Button px='px-12' onClick={replay} >
                    play again
                </Button>
            </div>
            <PlayButton play={winner.botMove} className='w-36 small:w-28' />
        </div>
    );
}

export default Result;