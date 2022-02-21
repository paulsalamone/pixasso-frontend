const Format = (props) => {
  return (
    <>
      <div className="format">
        <p>Format:</p>
        <label for="width">Width: </label>
        <input
          type="text"
          id="format-width"
          value={props.state.formatWidth}
          onChange={(e) =>
            props.dispatch({ type: "newFormatWidth", payload: e.target.value })
          }
          placeholder="width"
          size="10"
        ></input>
        px
        <br />
        <label for="width">Height:</label>{" "}
        <input
          type="text"
          id="format-height"
          value={props.state.formatHeight}
          onChange={(e) =>
            props.dispatch({ type: "newFormatHeight", payload: e.target.value })
          }
          placeholder="height"
          size="10"
        ></input>
        px
      </div>
    </>
  );
};

export default Format;
