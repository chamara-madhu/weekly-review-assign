import React from "react";
import classnames from "classnames";

function FormInput(props) {
  return (
    <div className="form-group col-md-6 px-sm-2 mb-3">
      <label htmlFor={props.name}>
        {props.title} <span className="required-tag">*</span>
      </label>
      <input
        type={props.type}
        className={classnames("form-control", {
          "is-invalid": props.err,
        })}
        id={props.name}
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
        min="0"
      />
      <div className="invalid-feedback">{props.err}</div>
    </div>
  );
}

export default FormInput;
