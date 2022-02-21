const ProjectName = (props) => {
  return (
    <>
      <div className="project-name">
        <p>Project Name</p>
        <input
          type="text"
          id="project-name"
          value={props.state.projectName}
          onChange={(e) =>
            props.dispatch({ type: "newProjectName", payload: e.target.value })
          }
        ></input>
      </div>
    </>
  );
};

export default ProjectName;
