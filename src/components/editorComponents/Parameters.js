const Parameters = (props) => {
  //   console.log(props.state.parameterA);
  return (
    <>
      <div className="parameter">
        <div className="parameter">
          <p>Parameter A</p>

          <input
            type="range"
            id="parameterA"
            value={props.state.parameterA}
            min="0"
            max="100"
            onChange={(e) => {
              props.dispatch({
                type: "newParameterA",
                payload: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Parameters;
