import CardImage from "./CardImage";
import CardContent from "./CardContent";
import "../css/Card.css";

function Card({ link }) {
  function cardClick() {
    window.open(link.url);
  }
  return (
    <div className="wrap-card" onClick={cardClick}>
      <CardImage cardImg={link.imageSource} />
      <CardContent
        cardDescription={link.description}
        cardCreatedAt={link.createdAt}
      />
    </div>
  );
}

export default Card;
