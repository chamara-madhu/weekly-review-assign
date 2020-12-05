import React from "react";

import FormInput from "../../form-inputs/FormInput";

function Quotatuins(props) {
  return (
    <React.Fragment>
      <h6 className="sec-heading">Quotations</h6>
      <div className="form-row">
        <FormInput
          title="Target"
          type="number"
          name="quoTarget"
          value={props.form.quoTarget}
          handleChange={props.handleChange}
          err={props.form.quoTargetErr}
        />
        <FormInput
          title="Actual"
          type="number"
          name="quoActual"
          value={props.form.quoActual}
          handleChange={props.handleChange}
          err={props.form.quoActualErr}
        />
      </div>
    </React.Fragment>
  );
}

export default Quotatuins;
