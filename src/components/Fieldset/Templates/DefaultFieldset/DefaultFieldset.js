import React from "react";
import { getStyle } from "../../../tailwind";

const DefaultFieldset = (props) => {
  //Access to main props
  //Injected at runtime
  const { item, child } = props;

  //Always check to not render with error ;)
  if (item === undefined) return null;
  const { label = "", theme = "" } = item;
  //Access to all props that introduced in element.
  return (
    <div style={getStyle(props.item?.theme) ?? { flex: 1 }}>
      {props.child && props.child}
    </div>
  );
};

export default DefaultFieldset;
