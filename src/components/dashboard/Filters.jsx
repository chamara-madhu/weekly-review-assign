import React from "react";

import "../../styles/filters.css";

function Filters(props) {
  const [teamLeaders, setTeamLeaders] = React.useState([]);

  React.useEffect(() => {
    setTeamLeaders(
      localStorage.getItem("team_leaders")
        ? JSON.parse(localStorage.getItem("team_leaders"))
        : []
    );
  }, []);

  return (
    <div className="row m-0 mb-4">
      <div className="col p-0">
        <div className="form-row filter-row">
          <div className="filter-col">
            <label>Team Leader</label>
            <select
              className="form-control"
              name="teamLeader"
              value={props.teamLeader}
              onChange={(e) => props.setTeamLeader(e.target.value)}
            >
              <option defaultValue>-- All --</option>
              {teamLeaders.map((el, i) => (
                <option value={el.code} key={i}>
                  {el.name} {el.code}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-col">
            <label>From</label>
            <input
              type="date"
              className="form-control"
              name="from"
              value={props.from}
              onChange={(e) => props.setFrom(e.target.value)}
            />
          </div>

          <div className="filter-col">
            <label>To</label>
            <input
              type="date"
              className="form-control"
              name="to"
              value={props.to}
              onChange={(e) => props.setTo(e.target.value)}
            />
          </div>
        </div>
        <span className="reset-filter-btn" onClick={props.resetFilters}>
          <i className="fas fa-sync-alt"></i> Reset Filters
        </span>
      </div>
    </div>
  );
}

export default Filters;
