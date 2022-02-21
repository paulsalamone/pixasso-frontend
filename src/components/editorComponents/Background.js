const Background = (props) => {
  return (
    <>
      <div className="BGcolor">
        <p>Background Color:</p>
        <input
          type="text"
          id="BG-color"
          value={props.state.BGcolor}
          onChange={(e) =>
            props.dispatch({ type: "newBGcolor", payload: e.target.value })
          }
        ></input>
      </div>
    </>
  );
};

export default Background;
