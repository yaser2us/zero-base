import React from "react";
import { Button, Modal } from "antd-mobile";
import { DefaultBlock as Block } from "../../../../components/Block/Templates/DefaultBlock";

import "./DefaultModal.scss";

const DefaultModal = (props) => {
  const { item } = props;

  // Not the best way to do it, would love opinion from the team
  const { header = "", label = "", extra = {} } = item;
  const { modalContent } = extra;
  const { title = "", content = "", confirmText = "Okay" } = modalContent;

  return (
    <Block
      title={header}
      blockClassName="pickerBlock"
      titleClassName="pickerTitle"
    >
      <Button
        block
        className="fullButton"
        onClick={() => {
          Modal.alert({
            bodyClassName: "buttonModal",
            title: title,
            content: content,
            showCloseButton: true,
            confirmText: confirmText,
          });
        }}
      >
        {label}
      </Button>
    </Block>
  );
};

export default DefaultModal;
