import React, {  useState } from "react";
import "./UserDashboard.css"
import ProfileCard from "../../Components/UserDeshDesign/ProfileCard";

const UserDashboard = () => {
//   const { user, logout } = useContext(UserContext);
  const [section, setSection] = useState("profile");

  return (
    <div className="user-dashboard">
      <h2 className="dashboard-heading">Welcome</h2>

      <div className="dashboard-nav">
  <button className="dashboard-nav-button" onClick={() => setSection("profile")}>My Profile</button>
 
</div>


      <div className="dashboard-content">
        {section === "profile" && <ProfileCard />}
      </div>
    </div>
  );
};

export default UserDashboard;
