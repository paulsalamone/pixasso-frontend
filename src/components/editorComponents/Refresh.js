// import { RefreshContext } from "../../contexts/RefreshContext";
// import { useState, useContext } from "react";

// const Refresh = () => {
//   const [refresh, setRefresh] = useContext(RefreshContext);
//   const [_, set_] = useContext(Algo3Context);

//   const [backup, setBackup] = useState(_);

//   useEffect(() => {
//     set_(backup);
//     setRefresh(false);
//   }, [refresh]);

//   const refreshHandler = (e) => {
//     setRefresh(true);
//     console.log("refresh triggered");
//   };

//   return (
//     <div>
//       <p>Page:</p>
//       <button onClick={refreshHandler}>refresh</button>
//     </div>
//   );
// };

// export default Refresh;
