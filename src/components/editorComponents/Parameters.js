const Parameters = (props) => {
  //   console.log(props.state.parameterA);
  return (
    <>
      <div className="parameter">
        <div className="parameter">
          <p>Parameter A</p>
          <input
            type="range"
            id="parameter-A"
            value={props.state.parameterA}
            min="0"
            max="100"
            onChange={(e) => {
              console.log(e.target.value);
              props.dispatch({
                type: "newParameterA",
                payload: e.target.value,
              });
              console.log("State: " + props.state.parameterA);
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default Parameters;
