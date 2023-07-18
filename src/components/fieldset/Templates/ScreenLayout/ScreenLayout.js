import React from "react";
import { Block } from "../Block";

const ScreenLayout = (props) => (
  <div className="container">
    <div className="content">
      <Block {...props} />
    </div>
  </div>
);

export default ScreenLayout;