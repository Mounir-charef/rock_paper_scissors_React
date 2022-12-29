function Button({children, px, onClick, absolute }) {
    return (
        <button onClick={onClick} className={`text-white py-1 ${px} text-lg font-semibold self-end border-2 border-white rounded-md
         ${absolute? 'absolute bottom-0' : ''} transition medium:active:bg-white medium:active:text-DarkText md:hover:bg-white md:hover:text-DarkText -translate-x-2 -translate-y-2`}>
            {children}
        </button>
    );
}

export default Button;