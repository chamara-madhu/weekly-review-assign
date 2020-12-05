import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import BasicInfo from "./sections/BasicInfo";
import Recruitment from "./sections/Recruitment";
import Quotatuins from "./sections/Quotatuins";
import ActiveAdvisors from "./sections/ActiveAdvisors";
import PendingClearance from "./sections/PendingClearance";

const initailState = {
  teamLeader: "",
  startDate: "",
  endDate: "",
  existing: "",
  registration: "",
  newCodes: "",
  quoTarget: "",
  quoActual: "",
  advisors: "",
  proposals: "",
  suspense: "",
  renewals: "",
  revivals: "",
  teamLeaderErr: "",
  existingErr: "",
  registrationErr: "",
  newCodesErr: "",
  quoTargetErr: "",
  quoActualErr: "",
  advisorsErr: "",
  proposalsErr: "",
  suspenseErr: "",
  renewalsErr: "",
  revivalsErr: "",
};

function AddWeeklyRev() {
  const [form, setForm] = useState(initailState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.name + "Err"]: "",
    });
  };

  // validate
  const validate = () => {
    let startDateErr = "";
    let endDateErr = "";
    let teamLeaderErr = "";
    let existingErr = "";
    let registrationErr = "";
    let newCodesErr = "";
    let quoTargetErr = "";
    let quoActualErr = "";
    let advisorsErr = "";
    let proposalsErr = "";
    let suspenseErr = "";
    let renewalsErr = "";
    let revivalsErr = "";

    if (!form.startDate) {
      startDateErr = "Start date is required";
    }

    if (!form.endDate) {
      endDateErr = "End date is required";
    }

    if (!form.teamLeader) {
      teamLeaderErr = "Please select a team Leader";
    }

    if (!form.existing) {
      existingErr = "The no of existing is required";
    }

    if (!form.registration) {
      registrationErr = "The no of registrations is required";
    }

    if (!form.newCodes) {
      newCodesErr = "The no of new codes issued is required";
    }

    if (!form.quoTarget) {
      quoTargetErr = "Target is required";
    }

    if (!form.quoActual) {
      quoActualErr = "Please enter the actual amount";
    }

    if (!form.advisors) {
      advisorsErr = "Please enter the target amount";
    }

    if (!form.proposals) {
      proposalsErr = "The no of proposals is required";
    }

    if (!form.suspense) {
      suspenseErr = "Suspense amount is required";
    }

    if (!form.renewals) {
      renewalsErr = "renewals amount is required";
    }

    if (!form.revivals) {
      revivalsErr = "revivals amount is required";
    }

    if (
      startDateErr ||
      endDateErr ||
      teamLeaderErr ||
      existingErr ||
      registrationErr ||
      newCodesErr ||
      quoTargetErr ||
      quoActualErr ||
      advisorsErr ||
      proposalsErr ||
      suspenseErr ||
      renewalsErr ||
      revivalsErr
    ) {
      setForm({
        ...form,
        startDateErr,
        endDateErr,
        teamLeaderErr,
        existingErr,
        registrationErr,
        newCodesErr,
        quoTargetErr,
        quoActualErr,
        advisorsErr,
        proposalsErr,
        suspenseErr,
        renewalsErr,
        revivalsErr,
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const teamLeaders = localStorage.getItem("team_leaders")
        ? JSON.parse(localStorage.getItem("team_leaders"))
        : [];

      // get team lead name
      let teamLeadName = "";

      if (teamLeaders.length > 0) {
        teamLeadName = teamLeaders.filter((el) => el.code === form.teamLeader);
      }

      const data = {
        id: uuidv4(),
        week: {
          start: moment.utc(form.startDate).local().format(),
          end: moment.utc(form.endDate).local().format(),
        },
        teamLeader: {
          code: form.teamLeader,
          name: teamLeadName[0].name,
        },
        recruitment: {
          existing: form.existing,
          registrations: form.registration,
          newCodes: form.newCodes,
        },
        quotations: {
          target: form.quoTarget,
          actual: form.quoActual,
        },
        activeAdvisors: form.advisors,
        pendingClearance: {
          proposals: form.proposals,
          suspense: form.suspense,
          renewals: form.renewals,
          revivals: form.revivals,
        },
        meetingNotes: [],
        status: "pending",
        actionTime: "",
      };

      let WR = [];

      if (localStorage.getItem("weekly_Reviews")) {
        WR = JSON.parse(localStorage.getItem("weekly_Reviews"));

        WR = [...WR, data];

        localStorage.setItem("weekly_Reviews", JSON.stringify(WR));
      } else {
        WR = [...WR, data];

        localStorage.setItem("weekly_Reviews", JSON.stringify(WR));
      }

      setLoading(false);
      setForm(initailState);
      scrollToTop();
      NotificationManager.success("Added successfully!", "Success");
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="content-col">
      <Breadcrumb title="Add Weekly Review" />

      <div className="container-fluid inner-content">
        <div className="ad-form-sec">
          <div className="form-row header mb-2">
            <div className="form-group col px-sm-2 mb-0">
              <p className="heading mb-0">Add Weekly Review</p>
              <p className="info-desc">
                Basic weekly reviews are added from here.
              </p>
            </div>
          </div>

          <div className="content">
            <form noValidate>
              <BasicInfo form={form} handleChange={handleChange} />
              <Recruitment form={form} handleChange={handleChange} />
              <Quotatuins form={form} handleChange={handleChange} />
              <ActiveAdvisors form={form} handleChange={handleChange} />
              <PendingClearance form={form} handleChange={handleChange} />
            </form>
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

          <NotificationContainer />
        </div>
      </div>
    </div>
  );
}

export default AddWeeklyRev;
