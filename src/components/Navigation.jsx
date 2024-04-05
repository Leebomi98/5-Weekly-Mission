import "../css/Navigation.css";
import Profile from "./Profile";

function Nav({ profile }) {
  return (
    <div className="nav">
      <div className="wrap">
        <img className="logo-image" src="/images/logo.png" alt="logo" />
        <div className="login-button">
          <p className="login-button-text">로그인</p>
        </div>
        <Profile profile={profile} />
      </div>
    </div>
  );
}

export default Nav;
