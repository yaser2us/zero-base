import React from "react";
import CardDefault from "./CardDefault";
import QuickActionCard from "./QuickActionCard/QuickActionCard";


const TemplateList = {
    '': (props) => <CardDefault {...props} />,
    'quickActionCard': (props) => <QuickActionCard {...props} />,
};

export default TemplateList;
