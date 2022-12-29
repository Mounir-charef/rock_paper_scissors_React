import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"

function PlayButton({play, className}) {
    const borderColor = {
        rock: ' border-red-500 ',
        paper: ' border-blue-500 ',
        scissors: ' border-yellow-500 '
    }
    const images = {
        rock: rock,
        paper: paper,
        scissors: scissors
    }

    return (
        <button className={`${className? className : ''}` + `${borderColor[play]? borderColor[play] : ''}` + ' w-24 transition md:w-32 hover:scale-110 active:scale-90 bg-white border-8 rounded-full aspect-square grid place-items-center'}>
            <img src={images[play]} alt={play} className='select-none '/>
        </button>
    );
}

export default PlayButton;