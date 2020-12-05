import React, { useState, useEffect } from "react";
import classnames from "classnames";

import FormInput from "../../form-inputs/FormInput";

function BasicInfo(props) {
  const [teamLeaders, setTeamLeaders] = useState([]);

  useEffect(() => {
    setTeamLeaders(
      localStorage.getItem("team_leaders")
        ? JSON.parse(localStorage.getItem("team_leaders"))
        : []
    );
  }, []);

  return (
    <React.Fragment>
      <div className="form-row">
        <FormInput
          title="Week - From"
          type="date"
          name="startDate"
          value={props.form.startDate}
          handleChange={props.handleChange}
          err={props.form.startDateErr}
        />
        <FormInput
          title="To"
          type="date"
          name="endDate"
          value={props.form.endDate}
          handleChange={props.handleChange}
          err={props.form.endDateErr}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 px-sm-2 mb-3">
          <label htmlFor="teamLeader">
            Team Leader <span className="required-tag">*</span>
          </label>
          <select
            id="teamLeader"
            className={classnames("form-control", {
              "is-invalid": props.form.teamLeaderErr,
            })}
            name="teamLeader"
            value={props.form.teamLeader}
            onChange={props.handleChange}
          >
            <option hidden value="-- Select --">
              -- Select --
            </option>
            {teamLeaders.map((el) => (
              <option value={el.code} key={el.code}>
                {el.name} {el.code}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{props.form.teamLeaderErr}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BasicInfo;
