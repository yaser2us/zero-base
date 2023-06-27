import React from "react";
import "./index.scss";
import QRPay from '../../../../../assets/QRPay.svg';
const QuickActionCard = (props) => {

  // Need to discuss with team on how to handle multiple desctructuring strategy
  const { item } = props;
  const { extra = {}, label } = item;
  const { image = "" } = extra;
  let bgImage;

  // Too hacky, need to resolve this soon
  switch (image) {
    case "QRPay":
      bgImage = QRPay;
      break;
    default:
      bgImage = "";
  }

  return (
    <div className="container-quick">
      <div>
        <div className="quick-img">
          <img src={bgImage} alt="" />
        </div>
        <div className="quick-title">{label}</div>
      </div>
    </div>
  );
};

export default QuickActionCard;