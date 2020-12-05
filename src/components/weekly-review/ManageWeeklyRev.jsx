import React, { useState, useEffect } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import TableHead from "./TableHead";
import ReviewTable from "./ReviewTable";

import "../../styles/review-table.css";

function ManageWeeklyRev() {
  const [weekReviews, setWeekReviews] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("weekly_Reviews")) {
      const TL = JSON.parse(localStorage.getItem("weekly_Reviews"));

      setWeekReviews(TL);
    }
  }, []);

  const SortByStartDate = weekReviews.sort((a, b) =>
    b.week.start.localeCompare(a.week.start)
  );

  const deleteReview = (id) => {
    const othersExceptDel = weekReviews.filter((el) => el.id !== id);

    setWeekReviews(othersExceptDel);
    localStorage.setItem("weekly_Reviews", JSON.stringify(othersExceptDel));
  };
  return (
    <div className="content-col">
      <Breadcrumb title="Manage Weekly Reviews" />

      <div className="container-fluid inner-content py-4">
        <div
          className="ad-form-sec"
          style={{ maxWidth: "unset", marginTop: 0 }}
        >
          <div className="content p-0 mt-4">
            <table className="table common-table review-table border">
              <TableHead />
              <tbody style={{ fontSize: 14 }}>
                <ReviewTable
                  SortByStartDate={SortByStartDate}
                  deleteReview={deleteReview}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageWeeklyRev;
