import React from "react";

import AdminLayout from "../components/layouts/AdminLayout";
import ManageWeeklyRev from "../components/weekly-review/ManageWeeklyRev";

function ManageWeeklyReviews() {
  return (
    <AdminLayout>
      <ManageWeeklyRev />
    </AdminLayout>
  );
}

export default ManageWeeklyReviews;
