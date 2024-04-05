import "../css/FolderHeader.css";

function FolderHeader() {
  return (
    <div className="wrap-all-link-search-bar">
      <div className="wrap-link-search-bar">
        <div className="wrap-link-search-bar-2">
          <input
            className="link-search-bar"
            type="text"
            placeholder="링크를 추가해 보세요"
          />
          <img
            className="link-img"
            src="images/link.png"
            alt="링크 추가 모양"
          />
          <div className="link-add-button">
            <p className="link-add-button-text">추가하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FolderHeader;
