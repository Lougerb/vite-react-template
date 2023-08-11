function Checkbox() {
    return ( 
        <label htmlFor="val1" className="radio-label">
            <input type="checkbox" name="radioName" id="val1" className="radio" />
            <span className="radio-span">val1</span>
        </label> 
     );
}

export default Checkbox;