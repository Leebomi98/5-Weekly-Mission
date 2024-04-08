import FolderHeader from "../FolderHeader";
import SearchBar from "../SearchBar";
import Nav from "../Navigation";
import MyFolders from "../MyFolders";
import { getMyFolder } from "../../api";
import { useEffect, useState } from "react";

function Folder() {
  const [myFolderData, setMyFolderData] = useState([]);

  const handleLoadMyFolder = async () => {
    const data = await getMyFolder();
    setMyFolderData(data);
  };

  useEffect(() => {
    handleLoadMyFolder();
  }, []);

  return (
    <div>
      <Nav />
      <FolderHeader />
      <SearchBar />
      <MyFolders data={myFolderData} />
    </div>
  );
}

export default Folder;
