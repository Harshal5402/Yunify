import React from "react";
import "./AdminDashboard.css"
import UserManagement from "../../Components/UserManagement/UserManagement";

function AdminDashboard() {
  const adminName = "";

  return (
    <div className="admin-dashboard">
      <UserManagement adminName={adminName} />
    </div>
  );
}

export default AdminDashboard;
