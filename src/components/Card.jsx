import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.socialIcon} alt="" className="Card-SocialIcon" />
      <span className="Card-Name">{props.name}</span>
      <strong className="Card-Num">{props.num}</strong>
      <strong className="Card-Type">{props.type}</strong>
      <img src={props.icon} alt="" className="Card-Icon" />
      <span className={props.positive ? "Card-Status positive" : "Card-Status"}>
        {props.status}
      </span>
    </div>
  );
}

Card.propTypes = {
  socialIcon: PropTypes.string,
  name: PropTypes.string,
  num: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  status: PropTypes.string,
  positive: PropTypes.bool,
};

export default Card;
