function Radio(props) {
    return ( 
        <label htmlFor={props.id} className="radio-label">
            <input type="radio" name={props.name} id={props.id} value={props.id} className="radio" />
            <span className="radio-span">{props.span}</span>
        </label> 
     );
}

export default Radio;