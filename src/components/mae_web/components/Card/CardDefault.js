import React from "react";
import { Block } from "../../../@vb/components/Block";
import { Card, Toast } from "antd-mobile";
import "./Card.scss";

const CardDefault = (props) => {
  const { item } = props;
  const { header, description, bgImage = "" } = item;

  const onClick = () => {
    Toast.show("ASNB");
  };

  return (
    <Block childrenClassName="cardBlock">
      <Card
        className="CardContainer"
        onClick={onClick}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <div className="CardHeader">{header}</div>
          <div className="CardContent">{description}</div>
        </div>
      </Card>
    </Block>
  );
};

export default CardDefault;
