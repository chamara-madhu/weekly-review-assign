import React, { useState, useEffect } from "react";

import Breadcrumb from "../breadcrumb/Breadcrumb";

function ManageTeamLead() {
  const [teamLeaders, setTeamLeaders] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("team_leaders")) {
      const TL = JSON.parse(localStorage.getItem("team_leaders"));

      setTeamLeaders(TL);
    }
  }, []);

  const getNotUsedTL = (code) => {
    const weeklyReviews = localStorage.getItem("weekly_Reviews")
      ? JSON.parse(localStorage.getItem("weekly_Reviews"))
      : [];

    const findTL = weeklyReviews.filter((el) => el.teamLeader.code === code);

    if (findTL.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const deleteTeamLeader = (code) => {
    const filterTL = teamLeaders.filter((el) => el.code !== code);

    setTeamLeaders(filterTL);
    localStorage.setItem("team_leaders", JSON.stringify(filterTL));
  };

  return (
    <div className="content-col">
      <Breadcrumb title="Manage Team Leader" />

      <div className="container-fluid inner-content py-4">
        <div className="ad-form-sec">
          <div className="content p-0">
            <table className="table table-hover common-table border">
              <thead>
                <tr>
                  <th className="border-0">Code</th>
                  <th className="border-0">Name</th>
                  <th className="text-center border-0">Action</th>
                </tr>
              </thead>
              <tbody>
                {teamLeaders.length ? (
                  teamLeaders.map((el) => (
                    <tr key={el.code}>
                      <td>{el.code}</td>
                      <td>{el.name}</td>
                      <td align="center">
                        {getNotUsedTL(el.code) ? (
                          <i className="fas fa-trash-alt fa-trash-disabled"></i>
                        ) : (
                          <i
                            className="fas fa-trash-alt"
                            onClick={() => deleteTeamLeader(el.code)}
                          ></i>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No Recods</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTeamLead;
