import React from "react";
import { getStyle } from "../../../tailwind";

const ScreenContainer = (props) => (
  <div
    style={getStyle(props.item?.theme) ?? { flex: 1, paddingHorizontal: 24 }}
  >
    {props.child && props.child}
  </div>
);

export default ScreenContainer;
