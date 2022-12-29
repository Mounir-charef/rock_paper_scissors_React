function Button({children, px, onClick, absolute }) {
    return (
        <button onClick={onClick} className={`text-white py-1 ${px} text-lg font-semibold border-2 border-white rounded-md
         ${absolute? 'absolute bottom-0 -translate-x-2 -translate-y-2 self-end' : ''} transition medium:active:bg-white medium:active:text-DarkText md:hover:bg-white md:hover:text-DarkText`}>
            {children}
        </button>
    );
}

export default Button;