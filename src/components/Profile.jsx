import "../css/Profile.css";

function Profile({ profile }) {
  console.log(profile);
  return (
    <div className="profile">
      <img
        className="profile-img"
        src={profile?.profileImageSource ?? ""}
        alt="프로필 이미지"
      />
      <p className="profile-email">{profile?.email ?? ""}</p>
    </div>
  );
}

export default Profile;
