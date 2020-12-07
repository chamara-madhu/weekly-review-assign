import React from "react";
import NumberFormat from "react-number-format";
import moment from "moment";

function ReviewTable(props) {
  return props.SortByStartDate.length ? (
    props.SortByStartDate.map((el) => (
      <tr key={el.id}>
        <td>
          <p className="m-0">
            {el.teamLeader.name + " - " + el.teamLeader.code}
          </p>
          <p className="m-0 text-muted">
            {moment.utc(el.week.start).local().format("DD MMM")}
            {" - "}
            {moment.utc(el.week.end).local().format("DD MMM YYYY")}
          </p>
        </td>
        <td className="p-0 border-left">
          <table className="w-100 text-center">
            <tbody>
              <tr>
                <td className="border-top-0">{el.recruitment.existing}</td>
                <td className="border-top-0">{el.recruitment.registrations}</td>
                <td className="border-top-0">{el.recruitment.newCodes}</td>
              </tr>
            </tbody>
          </table>
        </td>
        <td className="p-0 border-left">
          <table className="w-100 text-center">
            <tbody>
              <tr>
                <td className="border-top-0">{el.quotations.target}</td>
                <td className="border-top-0">{el.quotations.actual}</td>
                <td className="border-top-0" style={{ fontWeight: 500 }}>
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
        <td className="text-center border-left">
          <i
            className="fas fa-trash-alt"
            onClick={() => props.deleteReview(el.id)}
          ></i>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">No Recods</td>
    </tr>
  );
}

export default ReviewTable;
