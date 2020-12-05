import React from "react";
// import ReactTooltip from "react-tooltip";

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ verticalAlign: "middle" }}>Week</th>
        <th className="p-0">
          <table className="w-100 text-center table-bordered border-0">
            <tbody>
              <tr>
                <td colSpan="3" className=" border-top-0 border-right-0">
                  Recruitment
                </td>
              </tr>
              <tr>
                <td className="border-bottom-0" data-tip="Existing">
                  Ex
                </td>
                <td className="border-bottom-0" data-tip="Registrations">
                  Reg
                </td>
                <td className="border-bottom-0" data-tip="New Codes">
                  New
                </td>
              </tr>
            </tbody>
          </table>
        </th>
        <th className="p-0">
          <table className="w-100 text-center table-bordered border-0">
            <tbody>
              <tr>
                <td colSpan="3" className=" border-top-0 ">
                  Quotations
                </td>
              </tr>
              <tr>
                <td className="border-bottom-0" data-tip="Target">
                  T
                </td>
                <td className="border-bottom-0" data-tip="Actual">
                  A
                </td>
                <td className="border-bottom-0" data-tip="Percentage">
                  %
                </td>
              </tr>
            </tbody>
          </table>
        </th>
        <th className="text-center" style={{ verticalAlign: "middle" }}>
          Active advisors
        </th>
        <th className="p-0">
          <table className="w-100 text-center table-bordered border-0">
            <tbody>
              <tr>
                <td colSpan="4" style={{ borderTop: 0 }}>
                  Pending clearance (Rs.)
                </td>
              </tr>
              <tr>
                <td className="border-bottom-0" data-tip="Proposals">
                  Pro
                </td>
                <td className="border-bottom-0" data-tip="Suspense">
                  Sus
                </td>
                <td className="border-bottom-0" data-tip="Renewals">
                  Ren
                </td>
                <td className="border-bottom-0" data-tip="Revivals">
                  Rev
                </td>
              </tr>
            </tbody>
          </table>
        </th>
        <th
          className="text-center border-right"
          style={{ verticalAlign: "middle" }}
        >
          Meeting Notes
        </th>
        <th className="text-center" style={{ verticalAlign: "middle" }}>
          Action
        </th>
      </tr>

      {/* <ReactTooltip
        className="tooltip-cus"
        backgroundColor="#cca326"
        textColor="#000"
      /> */}
    </thead>
  );
}

export default TableHead;
