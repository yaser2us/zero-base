import React from "react";

import TextDefault from "./textDefault";

const TemplateList = {
    "": (props) => <TextDefault {...props} />,
    "search": (props) => <TextDefault {...props} />,
};

export default TemplateList;
