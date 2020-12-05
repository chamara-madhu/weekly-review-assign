import React, { useState } from "react";
import classnames from "classnames";
// import "animate.css/animate.min.css";
// import "react-notifications-component/dist/theme.css";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import Breadcrumb from "../breadcrumb/Breadcrumb";

const initailState = {
  code: "",
  name: "",
  codeErr: "",
  nameErr: "",
};

function AddTeamLead() {
  const [form, setForm] = useState(initailState);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "code") {
      setForm({
        ...form,
        [e.target.name]: e.target.value.trim(),
        [e.target.name + "Err"]: "",
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
        [e.target.name + "Err"]: "",
      });
    }
  };

  // validate
  const validate = () => {
    let codeErr = "";
    let nameErr = "";
    let TL = [];
    if (localStorage.getItem("team_leaders")) {
      TL = JSON.parse(localStorage.getItem("team_leaders"));
    }

    if (!form.code) {
      codeErr = "Code is required";
    } else if (TL.filter((el) => el.code === form.code).length > 0) {
      codeErr = "Code already exists";
    }

    if (!form.name) {
      nameErr = "Name is required";
    }

    if (codeErr || nameErr) {
      setForm({
        ...form,
        codeErr,
        nameErr,
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const data = {
        code: form.code,
        name: form.name.trim(),
      };

      let TL = [];

      if (localStorage.getItem("team_leaders")) {
        TL = JSON.parse(localStorage.getItem("team_leaders"));

        TL = [...TL, data];

        localStorage.setItem("team_leaders", JSON.stringify(TL));
      } else {
        TL = [...TL, data];

        localStorage.setItem("team_leaders", JSON.stringify(TL));
      }

      setLoading(false);
      setForm(initailState);
      NotificationManager.success("Added successfully!", "Success");
    }
  };

  return (
    <div className="content-col">
      <Breadcrumb title="Add Team Leader" />

      <div className="container-fluid inner-content py-4">
        <div className="ad-form-sec">
          <form noValidate>
            <div className="form-row header mb-2">
              <div className="form-group col px-sm-2 mb-0">
                <p className="heading mb-0">Add Team Leader</p>
                <p className="info-desc">
                  Name and code are required and code should be unique.
                </p>
              </div>
            </div>

            <div className="content">
              <div className="form-row">
                <div className="form-group col-md-6 px-sm-2 mb-3">
                  <label htmlFor="code">
                    Code <span className="required-tag">*</span>
                  </label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": form.codeErr,
                    })}
                    id="code"
                    name="code"
                    onChange={handleChange}
                    value={form.code}
                  />
                  <div className="invalid-feedback">{form.codeErr}</div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 px-sm-2 mb-3">
                  <label htmlFor="name">
                    Name <span className="required-tag">*</span>
                  </label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": form.nameErr,
                    })}
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                  />
                  <div className="invalid-feedback">{form.nameErr}</div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn-submit mt-3"
              onClick={handleSubmit}
              style={{ width: 100, float: "right" }}
            >
              {loading ? (
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : null}
              {loading ? "" : "Add"}
            </button>
          </form>

          <NotificationContainer />
        </div>
      </div>
    </div>
  );
}

export default AddTeamLead;
