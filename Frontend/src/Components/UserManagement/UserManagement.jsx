import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./UserManagement.css";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { url } = useContext(StoreContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${url}/api/admin/users`);
        if (Array.isArray(res.data)) setUsers(res.data);
        else if (Array.isArray(res.data.users)) setUsers(res.data.users);
        else setUsers([]);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };
    fetchUsers();
  }, [url]);

  const filteredUsers = Array.isArray(users)
    ? users.filter(
        (user) =>
          user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.mobileNumber.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleEdit = (userId) => {
    alert(`Edit functionality coming soon for user ID: ${userId}`);
  };

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${url}/api/admin/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="welcome-text">User Management - Yunify</div>

      <div className="search-bar">
        <input
          type="text"
          className="yunify-input"
          placeholder="Search by name, email or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <button className="btn-action btn-edit" onClick={() => handleEdit(user._id)}>
                    Edit
                  </button>
                  <button className="btn-action btn-delete" onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
