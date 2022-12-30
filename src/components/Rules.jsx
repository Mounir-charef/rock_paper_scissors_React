import rules from "../images/image-rules.svg"
function Rules({opacity, onClick}) {
    const display = opacity? 'active' : ''
    return (
        <div className={'absolute translate-y-full opacity-0 transition-all flex medium:h-full medium:w-full md:p-10 md:gap-5 md:rounded-md md:aspect-square top-1/2 left-1/2' +
            ' flex-col justify-around items-center bg-white ' + display}>
            <h2 className='text-4xl font-bold'>RULES</h2>
            <img src={rules} alt="rules"/>
            <button className='text-DarkText text-lg font-semibold rounded-md border-2 border-DarkText py-2 px-6 transition hover:bg-DarkText hover:text-white' onClick={onClick}>
                CLOSE
            </button>
        </div>
    );
}
export default Rules;