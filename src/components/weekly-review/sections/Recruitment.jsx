import React from "react";

import FormInput from "../../form-inputs/FormInput";

function Recruitment(props) {
  return (
    <React.Fragment>
      <h6 className="sec-heading">Recruitment</h6>
      <div className="form-row">
        <FormInput
          title="No of existings"
          type="number"
          name="existing"
          value={props.form.existing}
          handleChange={props.handleChange}
          err={props.form.existingErr}
        />
        <FormInput
          title="No of registrations"
          type="number"
          name="registration"
          value={props.form.registration}
          handleChange={props.handleChange}
          err={props.form.registrationErr}
        />
      </div>
      <div className="form-row">
        <FormInput
          title="No of new Codes"
          type="number"
          name="newCodes"
          value={props.form.newCodes}
          handleChange={props.handleChange}
          err={props.form.newCodesErr}
        />
      </div>
    </React.Fragment>
  );
}

export default Recruitment;
