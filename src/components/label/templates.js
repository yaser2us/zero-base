import React from "react";

// import {Text} from 'react-native';
// import {getStyle} from '../tailwind';
import LabelDefault from "./labelDefault";
import LabelLeft from "./labelLeft";

const TemplateList = {
    "": (props) => <LabelDefault {...props} />,
    "labelLeft": (props) => <LabelLeft {...props} />,
};

export default TemplateList;
