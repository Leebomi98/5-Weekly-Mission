import Folder from "../Folder";
import Nav from "../Navigation";
import SearchBar from "../SearchBar";
import Cards from "../Cards";
import Footer from "../Footer";
import { getProfile, getFolder } from "../../api";
import { useEffect, useState } from "react";

function Shared() {
  const [profile, setProfile] = useState(null);
  const [folderData, setFolderData] = useState(null);

  const handleLoadProfile = async () => {
    const { email, id, name, profileImageSource } = await getProfile();
    setProfile({
      email,
      id,
      name,
      profileImageSource,
      // email: email,
      // id: id,
      // name: name,
      // profileImageSource,
    });
  };

  const handleLoadFolder = async () => {
    const { count, id, links, name, owner } = await getFolder();
    setFolderData({
      count,
      id,
      links,
      name,
      owner,
    });
  };

  useEffect(() => {
    handleLoadProfile();
    handleLoadFolder();
  }, []);

  return (
    <div>
      <Nav profile={profile} />
      {folderData && (
        <Folder
          name={folderData.name}
          profileImageSource={folderData.owner.profileImageSource}
          ownerName={folderData.owner.name}
        />
      )}
      <SearchBar />
      {folderData && <Cards links={folderData.links} />}
      <Footer />
      <div className="search-form"></div>
    </div>
  );
}

export default Shared;
