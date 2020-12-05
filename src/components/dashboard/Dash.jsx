import React, { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import TableHead from "./TableHead";
import ReviewTable from "./ReviewTable";
import Filters from "./Filters";

import "../../styles/review-table.css";

function Dash() {
  const [weekReviews, setWeekReviews] = useState([]);
  const [teamLeader, setTeamLeader] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [note, setNote] = useState({
    value: "",
    noteErr: "",
  });
  const [meetingNotes, setMeetingNotes] = useState([]);
  const [noteEditId, setNoteEditId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("weekly_Reviews")) {
      const TL = JSON.parse(localStorage.getItem("weekly_Reviews"));

      setWeekReviews(TL);
    }
  }, []);

  const handleAction = (id, status) => {
    const releventRecord = weekReviews.filter((el) => el.id === id);
    const otherRecord = weekReviews.filter((el) => el.id !== id);

    if (releventRecord.length > 0) {
      releventRecord[0].status = status;
      releventRecord[0].actionTime = moment().format();

      setWeekReviews(releventRecord.concat(otherRecord));
      localStorage.setItem("weekly_Reviews", JSON.stringify(weekReviews));
    }
  };

  const filterWRbyLeader = weekReviews.filter((el) => {
    if (teamLeader && teamLeader !== "-- All --") {
      return el.teamLeader.code === teamLeader;
    } else {
      return el.teamLeader.code !== null;
    }
  });

  const filterWRbyStartDate = filterWRbyLeader.filter((el) => {
    if (from) {
      return el.week.start >= moment.utc(from).local().format();
    } else {
      return el.week.start !== null;
    }
  });

  const filterWRbyEndDate = filterWRbyStartDate.filter((el) => {
    if (to) {
      return el.week.end <= moment.utc(to).local().format();
    } else {
      return el.week.end !== null;
    }
  });

  const SortByStartDate = filterWRbyEndDate.sort((a, b) =>
    a.week.start.localeCompare(b.week.start)
  );

  const groups = SortByStartDate.reduce((groups, leader) => {
    const lead = leader.teamLeader.name + " - " + leader.teamLeader.code;
    if (!groups[lead]) {
      groups[lead] = [];
    }
    groups[lead].push(leader);
    return groups;
  }, {});

  const groupByTeamLead = Object.keys(groups).map((lead) => {
    return {
      lead,
      review: groups[lead],
    };
  });

  const resetFilters = () => {
    setTeamLeader("");
    setFrom("");
    setTo("");
  };

  // validate
  const validate = () => {
    let noteErr = "";

    console.log(note.value);

    if (!note.value) {
      noteErr = "Please type something";
    }

    if (noteErr) {
      setNote({
        ...note,
        noteErr,
      });

      return false;
    }

    return true;
  };

  const addNote = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        id: uuidv4(),
        note: note.value,
        status: "todo",
        createdAt: moment().format(),
      };

      const releventRecord = weekReviews.filter((el) => el.id === noteEditId);
      const otherRecord = weekReviews.filter((el) => el.id !== noteEditId);

      if (releventRecord.length > 0) {
        const join = [...releventRecord[0].meetingNotes, data];
        releventRecord[0].meetingNotes = join;

        setMeetingNotes(
          join.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        );

        setWeekReviews(releventRecord.concat(otherRecord));
        localStorage.setItem("weekly_Reviews", JSON.stringify(weekReviews));
        setNote({ ...note, value: "" });
      }
    }
  };

  const deleteNote = (id) => {
    const releventRecord = weekReviews.filter((el) => el.id === noteEditId);
    const otherRecord = weekReviews.filter((el) => el.id !== noteEditId);

    const othersExceptDelNotes = releventRecord[0].meetingNotes.filter(
      (el) => el.id !== id
    );

    releventRecord[0].meetingNotes = othersExceptDelNotes;
    setMeetingNotes(othersExceptDelNotes);
    setWeekReviews(releventRecord.concat(otherRecord));
    localStorage.setItem("weekly_Reviews", JSON.stringify(weekReviews));
  };

  const handleStatus = (id, status) => {
    const releventRecord = weekReviews.filter((el) => el.id === noteEditId);
    const otherRecord = weekReviews.filter((el) => el.id !== noteEditId);

    const releventStatusNotes = releventRecord[0].meetingNotes.filter(
      (el) => el.id === id
    );

    const othersExceptStatusNotes = releventRecord[0].meetingNotes.filter(
      (el) => el.id !== id
    );

    releventStatusNotes[0].status = status;
    const join = releventStatusNotes.concat(othersExceptStatusNotes);
    releventRecord[0].meetingNotes = join;

    setMeetingNotes(
      join.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    );

    setWeekReviews(releventRecord.concat(otherRecord));
    localStorage.setItem("weekly_Reviews", JSON.stringify(weekReviews));
  };

  return (
    <div className="content-col">
      <div className="container-fluid inner-content py-4">
        <div
          className="ad-form-sec"
          style={{ maxWidth: "unset", marginTop: 0 }}
        >
          <div className="content">
            <Filters
              teamLeader={teamLeader}
              from={from}
              to={to}
              setTeamLeader={setTeamLeader}
              setFrom={setFrom}
              setTo={setTo}
              resetFilters={resetFilters}
            />

            <table className="table common-table review-table border">
              <TableHead />
              <tbody style={{ fontSize: 14 }}>
                <ReviewTable
                  groupByTeamLead={groupByTeamLead}
                  handleAction={handleAction}
                  note={note}
                  setNote={setNote}
                  addNote={addNote}
                  meetingNotes={meetingNotes}
                  deleteNote={deleteNote}
                  handleStatus={handleStatus}
                  setNoteEditId={setNoteEditId}
                  setMeetingNotes={setMeetingNotes}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
