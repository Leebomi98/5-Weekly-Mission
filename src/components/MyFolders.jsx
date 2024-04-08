import "../css/MyFolders.css";
import MyFolder from "./MyFolder";

function MyFolders({ data }) {
  return (
    <div className="my-folders-container">
      <div className="my-folders-wrapper">
        <div className="my-folder-list">
          {data.map((myFolder) => {
            return <MyFolder name={myFolder.name} />;
          })}
        </div>
        <div className="add-button">
          <p className="add-button-text">폴더 추가</p>
          <img
            className="add-button-icon"
            src="images/add-folder-button-icon.png"
            alt="폴더 추가 버튼 아이콘"
          />
        </div>
      </div>
    </div>
  );
}

export default MyFolders;
