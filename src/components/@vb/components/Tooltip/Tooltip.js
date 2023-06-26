import React from "react";
import Icon from "@ant-design/icons";
import { Button, Modal } from "antd-mobile";
import { InfoSvg } from "../../../../assets/Icon/InfoSvg";
import "./Tooltip.scss";
export const Tooltip = (props) => {
  const InfoIcon = (props) => <Icon component={InfoSvg} {...props} />;
  return (
    <InfoIcon
      onClick={() => {
        Modal.show({
          className: "tooltipMask",
          title: "Primary source of wealth",
          content: "The main souce of your total assets",
          showCloseButton: true,
          closeOnMaskClick: true,
          bodyClassName: "tooltipBody",
        });
      }}
    ></InfoIcon>
  );
};
