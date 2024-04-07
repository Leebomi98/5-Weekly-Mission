import "../css/Navigation.css";
import Profile from "./Profile";

function Nav({ profile }) {
  // let rightShowTag;

  // if (profile) {
  //   rightShowTag = <Profile profile={profile} />;
  // } else {
  //   rightShowTag = (
  //     <div className="login-button">
  //       <p className="login-button-text">로그인</p>
  //     </div>
  //   );
  // }
  return (
    <div className="nav">
      <div className="wrap">
        <img className="logo-image" src="/images/logo.png" alt="logo" />
        {/* {rightShowTag} */}
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <div className="login-button">
            <p className="login-button-text">로그인</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
