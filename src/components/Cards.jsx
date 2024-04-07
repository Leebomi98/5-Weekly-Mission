import Card from "./Card";
import "../css/Cards.css";

function Cards({ links }) {
  return (
    <div className="wrap-cards">
      <div className="cards">
        {links.map((link) => {
          return <Card link={link} key={link.id} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
