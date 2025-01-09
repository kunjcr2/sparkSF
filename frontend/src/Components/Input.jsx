function Input(props) {
  return (
    <div className="input">
      <input
        type="text"
        name={props.whatFor}
        placeholder={props.placeholder}
        value={props.value} 
        onChange={props.onChange} 
      />
    </div>
  );
}

export default Input;
