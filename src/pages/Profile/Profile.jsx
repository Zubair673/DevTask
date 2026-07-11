import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";

import ProfileCard from "../../components/Profile/ProfileCard";
import UserInfo from "../../components/Profile/UserInfo";
import UserStats from "../../components/Profile/UserStats";
import Skills from "../../components/Profile/Skills";
import EditProfileButton from "../../components/Profile/EditProfileButton";

function Profile() {
  return (
    <>
      <DashboardNavbar />

      <section className="min-h-screen bg-gray-100 py-10 px-5">

        <div className="max-w-5xl mx-auto">

          <ProfileCard />

          <UserInfo />

          <UserStats />

          <Skills />

          <EditProfileButton />

        </div>

      </section>
    </>
  );
}

export default Profile;