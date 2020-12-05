import React from "react";

import FormInput from "../../form-inputs/FormInput";

function PendingClearance(props) {
  return (
    <React.Fragment>
      <h6 className="sec-heading">Pending Clearance</h6>
      <div className="form-row">
        <FormInput
          title="No of Proposals"
          type="number"
          name="proposals"
          value={props.form.proposals}
          handleChange={props.handleChange}
          err={props.form.proposalsErr}
        />
        <FormInput
          title="Suspense"
          type="number"
          name="suspense"
          value={props.form.suspense}
          handleChange={props.handleChange}
          err={props.form.suspenseErr}
        />
      </div>
      <div className="form-row">
        <FormInput
          title="Renewals"
          type="number"
          name="renewals"
          value={props.form.renewals}
          handleChange={props.handleChange}
          err={props.form.renewalsErr}
        />
        <FormInput
          title="Revivals"
          type="number"
          name="revivals"
          value={props.form.revivals}
          handleChange={props.handleChange}
          err={props.form.revivalsErr}
        />
      </div>
    </React.Fragment>
  );
}

export default PendingClearance;
