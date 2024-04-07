import "../css/CardImage.css";

function CardImage({ cardImg }) {
  return (
    <div className="wrap-img">
      <img
        className="little-star"
        src="/images/little_star.png"
        alt="즐겨찾기 별모양"
      />
      <img
        className="card-img"
        src={cardImg ?? "images/no_card_data_img.png"}
        alt="카드 이미지"
        onError={(event) => {
          event.target.src = "images/no_card_data_img.png";
        }}
      />
    </div>
  );
}

export default CardImage;
