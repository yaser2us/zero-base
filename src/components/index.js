import React from "react";

// Components Cleanup
import { Button } from "./Button";
import { Header } from "./Header";
import { Fieldset } from "./Fieldset";
import { Checkbox } from "./Checkbox";

// New components
import { Tab } from "./mae_web/components/Tab";
import { Modal } from "./mae_web/components/Modal";
import { Card } from "./mae_web/components/Card";
import { BoxTopBottom } from "./mae_web/components/Container";
import { List } from "./mae_web/components/List";
import { Result } from "./mae_web/components/Result";
import { Wallet } from "./mae_web/components/Wallet";

// Reuse components
import { Radio } from "./@vb/components/Radio";

// Original components

import { Label } from "./label";
import { Select } from "./select";
import { Text } from "./text";
import { Hook } from "./Hook";

const Components = {
  button: (props) => <Button {...props} />,
  checkbox: (props) => <Checkbox {...props} />,
  fieldset: (props) => <Fieldset {...props} />,
  label: (props) => <Label {...props} />,
  radiobox: (props) => <Radio {...props} />,
  select: (props) => <Select {...props} />,
  // switch: (props) => <Switch {...props} />,
  text: (props) => <Text {...props} />,
  hook: (props) => <Hook {...props} />,

  // mae-web-kit
  header: (props) => <Header {...props} />,
  tab: (props) => <Tab {...props} />,
  showModal: (props) => <Modal {...props} />,
  card: (props) => <Card {...props} />,
  // would be nicer to rename this as container
  box: (props) => <BoxTopBottom {...props} />,
  list: (props) => <List {...props} />,
  result: (props) => <Result {...props} />,
  wallet: (props) => <Wallet {...props} />,
};

export const renderComponent = (type, propsItems) => {
  // find the respective type from dictionary
  const SelectedComponent = Components && Components[type];
  // to ensure it is not undefined
  // prevent rendering error
  if (SelectedComponent === undefined) return null;

  // return component with container together
  return SelectedComponent({ ...propsItems });
  //return renderContainer(selectedComponent({ ...propsItems }))
};

// const renderContainer = (children) => <View style={{ flex: 1 }}>{children}</View>;

export const validationResolver = {
  noteq: async (item, value) => {
    return !(value === item.value);
    // return (value !== "" && !item.value.includes(value)) || false;
  },
  eq: async (item, value) => {
    return value === item.value;
  },
  exist: async (item, value) => {
    return value !== "";
  },
  eq1: async (item, value) => {
    return (value !== "" && item.value.includes(value)) || false;
  },
};
