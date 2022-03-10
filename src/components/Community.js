import React from "react";

import { UserContext } from "../contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ImageViewer } from "react-image-viewer-dv";

const Community = () => {
  const [usersDisplayed, setUsersDisplayed] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const usersPerPage = 6;
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    await axios
      .get(`https://pixasso.herokuapp.com/api/users/all`)
      .then((res) => {
        setUsers(res.data);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(users.length / usersPerPage));
    let reverseList = users.reverse();
    console.log(reverseList);
    setUsersDisplayed(reverseList.slice(pageNumber, pageNumber + usersPerPage)); // 1,1+2----2,2+2
  }, [users, pageNumber]);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected * usersPerPage);
  };

  return (
    <>
      <div className="content-page">
        <div>
          <h1>Community artwork</h1>
          <h4>Most recent shown first:</h4>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={6}
            onPageChange={handlePageChange}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            pageRangeDisplayed={6}
            previousClassName={"page-items"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"break-me"}
            breakLinkClassName={"page-Link"}
            activeClassName={"active"}
          />
          <div className="community-grid">
            {!loading &&
              usersDisplayed.map((user) => {
                {
                  console.log(user.username);

                  console.log(user.sketch_ids);
                }
                return (
                  <div className="community-grid-cell ">
                    <h2>
                      {user.sketch_ids.filter(
                        (test) => test.sketch_status === true
                      ).length > 1 && user.username}
                    </h2>
                    <div className="community-grid-row">
                      {user.sketch_ids &&
                        user.sketch_ids
                          .filter((test) => test.sketch_status === true)
                          .slice(-3)
                          .map((sketch) => {
                            return (
                              <div>
                                <div>
                                  <ImageViewer>
                                    <img
                                      className="community-image"
                                      src={sketch.sketch_url}
                                      alt="community pixasso art"
                                    />
                                  </ImageViewer>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
