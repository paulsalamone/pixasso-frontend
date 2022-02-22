const Parameter = (props) => {
  return (
    <>
      <div className="parameter">
        <label>
          <p>{props.name}</p>
          <p>{props.value}</p>
        </label>
        <input
          type="range"
          name={props.name}
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={props.handleParameter}
        />
      </div>
      {/* <p>{props.value}</p> */}
    </>
  );
};

export default Parameter;
