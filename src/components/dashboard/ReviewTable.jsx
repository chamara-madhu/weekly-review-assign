import React from "react";
import NumberFormat from "react-number-format";
import moment from "moment";

import MeetingModal from "./MeetingModal";

function ReviewTable(props) {
  const getBgColor = (target, actual) => {
    let pert = (target / actual) * 100;

    if (pert < 75) {
      return "#f17878";
    } else if (75 <= pert && pert < 100) {
      return "#ffbf00";
    } else if (pert >= 100) {
      return "#3ed43e";
    }
  };

  const setBtnStyles = (status) => {
    if (status === "pending") {
      return "#FF9800";
    } else if (status === "completed") {
      return "#07a507";
    } else if (status === "absent") {
      return "#da3030";
    }
  };

  return (
    <React.Fragment>
      {props.groupByTeamLead.length > 0 ? (
        props.groupByTeamLead.map((el, i) => (
          <React.Fragment key={i}>
            <tr className="team-lead-row">
              <td colSpan="7">{el.lead}</td>
            </tr>
            {el.review.map((el) => (
              <tr key={el.id}>
                <td>
                  {moment.utc(el.week.start).local().format("DD MMM")}
                  {" - "}
                  {moment.utc(el.week.end).local().format("DD MMM YYYY")}
                </td>
                <td className="p-0 border-left">
                  <table className="w-100 text-center">
                    <tbody>
                      <tr>
                        <td className="border-top-0">
                          {el.recruitment.existing}
                        </td>
                        <td className="border-top-0">
                          {el.recruitment.registrations}
                        </td>
                        <td className="border-top-0">
                          {el.recruitment.newCodes}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td
                  className="p-0 border-left"
                  style={{
                    background: getBgColor(
                      el.quotations.actual,
                      el.quotations.target
                    ),
                  }}
                >
                  <table className="w-100 text-center">
                    <tbody>
                      <tr>
                        <td className="border-top-0">{el.quotations.target}</td>
                        <td className="border-top-0">{el.quotations.actual}</td>
                        <td
                          className="border-top-0"
                          style={{ fontWeight: 500 }}
                        >
                          {(
                            (el.quotations.actual / el.quotations.target) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="text-center border-left">
                  <p>{el.activeAdvisors}</p>
                </td>
                <td className="p-0 border-left">
                  <table className="w-100 text-right">
                    <tbody>
                      <tr>
                        <td className="border-top-0">
                          {el.pendingClearance.proposals}
                        </td>
                        <td className="border-top-0">
                          <NumberFormat
                            value={el.pendingClearance.suspense}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </td>
                        <td className="border-top-0">
                          <NumberFormat
                            value={el.pendingClearance.renewals}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </td>
                        <td className="border-top-0">
                          <NumberFormat
                            value={el.pendingClearance.revivals}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="p-0 border-left meeting-notes-td">
                  {el.meetingNotes.map((el, i) => (
                    <p key={i} className="notes">
                      {el.status === "todo" ? (
                        <i className="fas fa-question"></i>
                      ) : el.status === "completed" ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className="fas fa-times"></i>
                      )}{" "}
                      {el.note}
                    </p>
                  ))}
                  <i
                    className="fas fa-pencil-alt edit-meeting-note"
                    data-toggle="modal"
                    data-target="#meeting-note-modal"
                    onClick={() => {
                      props.setNoteEditId(el.id);
                      props.setMeetingNotes(el.meetingNotes);
                    }}
                  ></i>
                </td>
                <td className="text-center border-left">
                  <select
                    className="form-control action-btn"
                    name="teamLeader"
                    value={el.status}
                    onChange={(e) => props.handleAction(el.id, e.target.value)}
                    style={{
                      borderColor: setBtnStyles(el.status),
                      color: setBtnStyles(el.status),
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="absent">Absent</option>
                  </select>
                  {el.actionTime && (
                    <p className="text-muted mt-1 mb-0">
                      {moment.utc(el.actionTime).local().format("DD MMM YYYY")}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))
      ) : (
        <tr>
          <td colSpan="7">No Recods</td>
        </tr>
      )}

      <MeetingModal
        note={props.note}
        setNote={props.setNote}
        addNote={props.addNote}
        meetingNotes={props.meetingNotes}
        deleteNote={props.deleteNote}
        handleStatus={props.handleStatus}
        handleSaveNotes={props.handleSaveNotes}
      />
    </React.Fragment>
  );
}

export default ReviewTable;
