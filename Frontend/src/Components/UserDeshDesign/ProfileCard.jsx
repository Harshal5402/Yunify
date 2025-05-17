import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./ProfileCard.css";
import { StoreContext } from "../../context/StoreContext";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
    const { token, setToken, url } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
    mobileNumber: "",
    email: "",
    registrationNo: "",
    location: "",
    skills: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const backendURL = "http://localhost:4000/api/registration/profile"; 
  const backendURL = "https://yunify-backend-5sw8.onrender.com/api/registration/profile";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        console.log("Token:", localStorage.getItem("token"))

        const res = await axios.get(backendURL, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(res.data);
        setFormData({
          fullName: res.data.fullName || "",
          profileImage: res.data.profileImage || "",
          mobileNumber: res.data.mobileNumber || "",
          email: res.data.email || "",
          registrationNo: res.data.registrationNo || "",
          location: res.data.location || "",
          skills: (res.data.skills || []).join(", "),
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to load profile");
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const openEdit = () => setIsEditing(true);
  const closeEdit = () => setIsEditing(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const skillsArray = formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const res = await axios.put(
        backendURL,
        { ...formData, skills: skillsArray },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(res.data);
      setIsEditing(false);
    } catch (err) {
      alert("Update failed. Try again.");
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>No user data found</p>;

  return (
    <div className="account-container">
      <div className="profile-card">
        <div className="profile-photo-section">
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt={user.fullName}
              className="profile-photo"
            />
          ) : (
            <div className="profile-photo placeholder">
              {user.fullName ? user.fullName.charAt(0).toUpperCase() : ""}
            </div>
          )}
        </div>

        <div className="profile-details">
          <h2>{user.fullName}</h2>
          <p>
            <strong>Mobile Number:</strong> {user.mobileNumber}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Registration No:</strong> {user.registrationNo}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
          <p>
            <strong>Skills:</strong> {(user.skills || []).join(", ")}
          </p>
          <button className="btn-edits" onClick={openEdit}>
            Edit Profile
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="modal-overlay" onClick={closeEdit}>
          <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Profile</h3>
            <form className="edit-form" onSubmit={handleSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Profile Image URL:
                <input
                  type="text"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  placeholder="Paste image URL here"
                />
              </label>

              <label>
                Mobile Number:
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Registration No:
                <input
                  type="text"
                  name="registrationNo"
                  value={formData.registrationNo}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Skills (comma separated):
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-buttons">
                <button type="submit" className="btn-save">
                  Save
                </button>
                <button type="button" className="btn-cancel" onClick={closeEdit}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
