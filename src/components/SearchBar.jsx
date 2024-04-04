import "../css/SearchBar.css";

function SearchBar() {
  return (
    <div className="wrap-search-bar">
      <div className="wrap-search-bar-2">
        <input
          className="search-bar"
          type="text"
          placeholder="링크를 검색해 보세요."
        />
        <img className="search-bar-img" src="/images/Search.png" alt="돋보기" />
      </div>
    </div>
  );
}

export default SearchBar;
