import FolderHeader from "../FolderHeader";
import SearchBar from "../SearchBar";
import Nav from "../Navigation";
import MyFolders from "../MyFolders";

function Folder() {
  return (
    <div>
      <Nav />
      <FolderHeader />
      <SearchBar />
      <MyFolders />
    </div>
  );
}

export default Folder;
