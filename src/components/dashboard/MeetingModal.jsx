import React from "react";
import moment from "moment";
import classnames from "classnames";

import Close from "../../images/close.png";

import "../../styles/meeting-notes.css";

function MeetingModal(props) {
  const setBtnStyles = (status) => {
    if (status === "todo") {
      return "#FF9800";
    } else if (status === "completed") {
      return "#07a507";
    } else if (status === "fail") {
      return "#da3030";
    }
  };

  return (
    <div
      className="modal fade meeting-note-modal"
      id="meeting-note-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="meeting-note-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              style={{ fontSize: 22, fontWeight: "normal" }}
            >
              Meeting Notes
            </h5>

            <img
              src={Close}
              alt="close"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="note" className="title ml-0">
                    Note <span className="required-tag">*</span>
                  </label>
                  <div className="input-group">
                    <textarea
                      className={classnames("form-control", {
                        "is-invalid": props.note.noteErr,
                      })}
                      name="note"
                      value={props.note.value}
                      onChange={(e) =>
                        props.setNote({
                          ...props.note,
                          noteErr: "",
                          value: e.target.value,
                        })
                      }
                      placeholder="Type something and click add ..."
                    />
                    <div className="invalid-feedback" style={{ fontSize: 14 }}>
                      {props.note.noteErr}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button
              type="button"
              id="location-setting"
              className="btn add-btn float-right"
              onClick={props.addNote}
            >
              Add
            </button>

            <table
              className="table meeting-notes-table"
              style={{ marginTop: 70 }}
            >
              <tbody>
                {props.meetingNotes.map((el) => (
                  <tr key={el.id}>
                    <td>{moment.utc(el.createAt).local().format("DD MMM")}</td>
                    <td>{el.note}</td>
                    <td>
                      <select
                        className="form-control action-btn"
                        name="teamLeader"
                        value={el.status}
                        onChange={(e) =>
                          props.handleStatus(el.id, e.target.value)
                        }
                        style={{
                          borderColor: setBtnStyles(el.status),
                          color: setBtnStyles(el.status),
                        }}
                      >
                        <option value="todo">Todo</option>
                        <option value="completed">Competed</option>
                        <option value="fail">Fail</option>
                      </select>
                    </td>
                    <td>
                      <i
                        className="far fa-trash-alt"
                        onClick={() => props.deleteNote(el.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingModal;
