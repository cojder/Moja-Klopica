import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import ProfileCgange from "../components/profilechange/ProfileChange";
import ChangePassword from "../components/changePassword/ChangePassword";

const ProfilePage = () => {
  const [openChangePassword, setOpenChangedPassword] = useState(false);

  return (
    <div className="profile-page">
      <Navigationbar colorRed />
      {/* {!localStorage.getItem("token") && <div>Uloguje se</div>} */}
      <ProfileCgange showModal={setOpenChangedPassword} />
      {openChangePassword && (
        <ChangePassword closeModal={setOpenChangedPassword} />
      )}
      <Footer />
    </div>
  );
};

export default ProfilePage;
