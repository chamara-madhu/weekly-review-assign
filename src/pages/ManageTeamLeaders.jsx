import React from "react";

import AdminLayout from "../components/layouts/AdminLayout";
import ManageTeamLead from "../components/manage-team-leaders/ManageTeamLead";

function ManageTeamLeaders() {
  return (
    <AdminLayout>
      <ManageTeamLead />
    </AdminLayout>
  );
}

export default ManageTeamLeaders;
