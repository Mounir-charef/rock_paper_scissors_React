function PlayButton({image, play, className}) {
    return (
        <button className={className + 'w-24 transition-all md:w-32 hover:scale-110 active:scale-90 bg-white border-8 rounded-full aspect-square grid place-items-center'}>
            <img src={image} alt={play}/>
        </button>
    );
}

export default PlayButton;