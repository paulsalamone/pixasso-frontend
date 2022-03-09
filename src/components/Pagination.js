import "../App.css";

const Pagination = ({ data, page, setPage }) => {
  const goNext = () => {
    // setPage(page + 1);
  };
  const goPrev = () => {
    // setPage(page - 1);
  };
  const goLast = () => {
    // setPage(data.nbPages - 1);
  };
  const goFirst = () => {
    // setPage(0);
  };
  return (
    <div className="pageButtons">
      {page === 0 ? (
        <div>
          <span id="pageNumber">Page: {page + 1}</span>
          <button id="nextButton" onClick={goNext}>
            Next
          </button>
          <button id="lastPage" onClick={goLast}>
            Last
          </button>
        </div>
      ) : page === data.nbPages - 1 ? (
        <div>
          <button id="firstPage" onClick={goFirst}>
            First
          </button>
          <button id="prevButton" onClick={goPrev}>
            Prev
          </button>
          <span id="pageNumber">Page: {page + 1}</span>
        </div>
      ) : (
        <div>
          <button id="firstPage" onClick={goFirst}>
            First
          </button>
          <button id="prevButton" onClick={goPrev}>
            Prev
          </button>
          <span id="pageNumber">Page: {page + 1}</span>
          <button id="nextButton" onClick={goNext}>
            Next
          </button>
          <button id="lastPage" onClick={goLast}>
            Last
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;

// import "../App.css";

// const Pagination = ({ data, page, setPage }) => {
//   const goNext = () => {
//     setPage(page + 1);
//   };
//   const goPrev = () => {
//     setPage(page - 1);
//   };
//   const goLast = () => {
//     setPage(data.nbPages - 1);
//   };
//   const goFirst = () => {
//     setPage(0);
//   };
//   return (
//     <div className="pageButtons">
//       {page === 0 ? (
//         <div>
//           <span id="pageNumber">Page: {page + 1}</span>
//           <button id="nextButton" onClick={goNext}>
//             Next
//           </button>
//           <button id="lastPage" onClick={goLast}>
//             Last
//           </button>
//         </div>
//       ) : page === data.nbPages - 1 ? (
//         <div>
//           <button id="firstPage" onClick={goFirst}>
//             First
//           </button>
//           <button id="prevButton" onClick={goPrev}>
//             Prev
//           </button>
//           <span id="pageNumber">Page: {page + 1}</span>
//         </div>
//       ) : (
//         <div>
//           <button id="firstPage" onClick={goFirst}>
//             First
//           </button>
//           <button id="prevButton" onClick={goPrev}>
//             Prev
//           </button>
//           <span id="pageNumber">Page: {page + 1}</span>
//           <button id="nextButton" onClick={goNext}>
//             Next
//           </button>
//           <button id="lastPage" onClick={goLast}>
//             Last
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pagination;
