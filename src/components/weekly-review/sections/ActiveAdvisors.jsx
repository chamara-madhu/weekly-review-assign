import React from "react";

import FormInput from "../../form-inputs/FormInput";

function ActiveAdvisors(props) {
  return (
    <React.Fragment>
      <h6 className="sec-heading">Active Advisors</h6>
      <div className="form-row">
        <FormInput
          title="No of advisors"
          type="number"
          name="advisors"
          value={props.form.advisors}
          handleChange={props.handleChange}
          err={props.form.advisorsErr}
        />
      </div>
    </React.Fragment>
  );
}

export default ActiveAdvisors;
