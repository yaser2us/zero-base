import React from "react";
import CardDefault from "./CardDefault";
import QuickActionCard from "./QuickActionCard/QuickActionCard";
import FavouriteCard from "./FavouriteCard/FavouriteCard"


const TemplateList = {
    '': (props) => <CardDefault {...props} />,
    'quickActionCard': (props) => <QuickActionCard {...props} />,
    'favouriteCard': (props) => <FavouriteCard {...props} />,
};

export default TemplateList;
