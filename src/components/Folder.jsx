import "../css/Folder.css";

function Folder({ name, profileImageSource, ownerName }) {
  return (
    <div className="folder-wrap">
      <div className="user">
        <img
          className="folder-user"
          src={profileImageSource}
          alt="프로필 이미지"
        />
        <span className="folder-user-name">{ownerName}</span>
        <p className="folder-name">{name}</p>
      </div>
    </div>
  );
}

export default Folder;
