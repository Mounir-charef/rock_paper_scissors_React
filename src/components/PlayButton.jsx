import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"

function PlayButton({play, className, onClick}) {
    const buttons = {
        ROCK: {
            borderColor:' border-red-500 ',
            image: rock
        },
        PAPER: {
            borderColor:' border-blue-500 ',
            image: paper
        },
        SCISSORS: {
            borderColor:' border-yellow-500 ',
            image: scissors
        },
    }
    const {borderColor, image} = buttons[play];

    return (
        <button onClick={()=> onClick(play)} className={`${className? className : ''}` + `${borderColor? borderColor : ''} transition hover:scale-110 active:scale-90 bg-white border-8 rounded-full aspect-square grid place-items-center`}>
            <img src={image} alt={play} className='select-none touch-none'/>
        </button>
    );
}

export default PlayButton;