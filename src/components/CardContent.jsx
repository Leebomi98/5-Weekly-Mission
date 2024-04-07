import "../css/CardContent.css";

function CardContent({ cardDescription, cardCreatedAt }) {
  function convertDate() {
    const date = new Date(cardCreatedAt);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <div className="card-content">
      <div className="wrap-card-content-time-kebab">
        <span className="card-content-time">10</span>
        <img
          className="kebab-img"
          src="/images/kebab.png"
          alt="더보기 이미지"
        />
      </div>
      <p className="card-content-description">{cardDescription}</p>
      <span className="card-content-created-at">{convertDate()}</span>
    </div>
  );
}

export default CardContent;
