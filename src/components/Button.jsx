function Button({children, x, onClick, absolute}) {
    return (
        <button onClick={onClick} className={`text-white py-1 px-${x} text-lg font-semibold self-end border-2 border-white rounded-md
         ${absolute? 'absolute bottom-0' : ''} transition hover:bg-white hover:text-DarkText -translate-x-2 -translate-y-2`}>
            {children}
        </button>
    );
}

export default Button;