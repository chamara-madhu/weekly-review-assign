import React from "react";

import AdminLayout from "../components/layouts/AdminLayout";
import Dash from "../components/dashboard/Dash";

import "../styles/common.css";

function Dashboard() {
  return (
    <AdminLayout>
      <Dash />
    </AdminLayout>
  );
}

export default Dashboard;
