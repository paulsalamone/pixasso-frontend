const AlgoSelector = (props) => {
  return (
    <>
      <div className="BGcolor">
        <p>AlgoSelector:</p>
        <select
          onChange={(e) =>
            props.dispatch({
              type: "newAlgoSelection",
              payload: e.target.value,
            })
          }
        >
          <option value="algo1">Algo 1</option>
          <option value="algo2">Algo 2</option>
        </select>
      </div>
    </>
  );
};

export default AlgoSelector;
