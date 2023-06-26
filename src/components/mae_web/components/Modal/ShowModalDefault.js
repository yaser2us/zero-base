import React from "react";
import { Button, Modal } from "antd-mobile";
import { Block } from "../../../@vb/components/Block";
// import "../../styles.css";
import "./index.scss"

const ShowModalDefault = (props) => {

  const { item } = props;

  // Not the best way to do it, would love opinion from the team
  const { label = "", header = "", extra } = item;
  const { modalContent } = extra || {};
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
            bodyClassName:"buttonModal",
            title: title,
            content: content,
            showCloseButton: true,
            confirmText: confirmText
          });
        }}
      >
        { label }
      </Button>
    </Block>
  );
};

export default ShowModalDefault