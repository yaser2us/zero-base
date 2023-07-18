import React from "react";
import Icon from "@ant-design/icons";

import IconList from "./IconList";

const ButtonIcon = (props) => {
  //Access to main props
  //Injected at runtime
  const { item } = props;

  //Always check to not render with error ;)
  if (item === undefined) return null;

  const { theme = "", value, managedCallback } = item;

  const onClick = () => {};

  console.log("Trace IconButton: ", props);

  //Access to all props that introduced in element.
  return <Icon component={IconList[value]} {...props} onClick={onClick} />;
};

export default ButtonIcon;
