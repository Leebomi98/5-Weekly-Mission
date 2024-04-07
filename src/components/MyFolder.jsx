import "../css/MyFolder.css";

function MyFolder({ name }) {
  return (
    <div className="my-folder-container">
      <p className="my-folder-name">{name}</p>
    </div>
  );
}

export default MyFolder;
