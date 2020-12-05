import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Sidebar(props) {
  const [makeAcco, setMakeAcco] = useState(false);
  const [modelAcco, setModelAcco] = useState(false);

  return (
    <div className="admin-sidebar-col">
      <div className="fixed-div">
        <div className="panel">
          <Link
            to="/"
            className={
              props.history.location.pathname === "/" ? "active-tab" : ""
            }
            style={{
              paddingLeft: 12,
              background: "#0f131f",
              borderBottom: "1px solid #797979",
            }}
          >
            <i className="fas fa-chart-bar" style={{ marginRight: 5 }}></i>{" "}
            Dashboard
          </Link>
        </div>

        <div
          className={modelAcco ? "accordion active" : "accordion"}
          onClick={() => setModelAcco((modelAcco) => !modelAcco)}
        >
          Weekly Reviews
        </div>
        {modelAcco ? (
          <div className="panel">
            <Link
              to="/add-weekly-review"
              className={
                props.history.location.pathname === "/add-weekly-review"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-plus mr-2"></i> Add Weekly Review
            </Link>
            <Link
              to="/manage-weekly-reviews"
              className={
                props.history.location.pathname === "/manage-weekly-reviews"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-pencil-alt mr-2"></i> Manage Weekly Reviews
            </Link>
          </div>
        ) : null}
        <div
          className={makeAcco ? "accordion active" : "accordion"}
          onClick={() => setMakeAcco((makeAcco) => !makeAcco)}
        >
          Team Leaders
        </div>
        {makeAcco ? (
          <div className="panel">
            <Link
              to="/add-team-leader"
              className={
                props.history.location.pathname === "/add-team-leader"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-plus mr-2"></i> Add Team Leader
            </Link>
            <Link
              to="/manage-team-leaders"
              className={
                props.history.location.pathname === "/manage-team-leaders"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-pencil-alt mr-2"></i> Manage Team Leaders
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
