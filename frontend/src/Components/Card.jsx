function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt="Event Card" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;