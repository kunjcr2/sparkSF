function Button(props) {
    return (
        <a href={props.path}>
            <button>{props.text}</button>
        </a>
    );
}

export default Button;
