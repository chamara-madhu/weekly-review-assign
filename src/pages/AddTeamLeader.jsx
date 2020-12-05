import React from "react";

import AdminLayout from "../components/layouts/AdminLayout";
import AddTeamLead from "../components/manage-team-leaders/AddTeamLead";

function AddTeamLeader() {
  return (
    <AdminLayout>
      <AddTeamLead />
    </AdminLayout>
  );
}

export default AddTeamLeader;
