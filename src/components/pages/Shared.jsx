import Folder from "../Folder";
import Nav from "../Navigation";
import SearchBar from "../SearchBar";
import Cards from "../Cards";
import Footer from "../Footer";
import { getProfile } from "../../api";
import { useEffect, useState } from "react";

function Shared() {
  const [profile, setProfile] = useState(null);

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

  useEffect(() => {
    handleLoadProfile();
  }, []);

  return (
    <div>
      <Nav profile={profile} />
      <Folder />
      <SearchBar />
      <Cards />
      <Footer />
      <div className="search-form"></div>
    </div>
  );
}

export default Shared;
