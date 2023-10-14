import PropTypes from "prop-types";
import "./OverviewCard.css";

function OverviewCard(props) {
  return (
    <div className="OverviewCard">
      <div>
        <p className="OverviewCard-Name">{props.name}</p>
        <img
          src={props.socialIcon}
          alt=""
          className="OverviewCard-SocialIcon"
        />
      </div>
      <div>
        <strong className="OverviewCard-Num">{props.num}</strong>
        <div>
          <img src={props.icon} alt="" className="OverviewCard-Icon" />
          <span
            className={
              props.positive
                ? "OverviewCard-Status positive"
                : "OverviewCard-Status"
            }
          >
            {props.status}
          </span>
        </div>
      </div>
    </div>
  );
}

OverviewCard.propTypes = {
  socialIcon: PropTypes.string,
  name: PropTypes.string,
  num: PropTypes.string,
  icon: PropTypes.string,
  status: PropTypes.string,
  positive: PropTypes.bool,
};

export default OverviewCard;
