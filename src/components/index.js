import React from 'react'

// New components
import { Demo } from './mae_web/demo'
import { Header } from './mae_web/components/Header'
import { Tab } from './mae_web/components/Tab'
import { ShowModal } from './mae_web/components/Modal'

// Reuse components
import { Radio } from './@vb/components/Radio'

// Original components
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Fieldset } from './fieldset'
// import { Image } from "./image";
import { Label } from './label'
// import { Radiobox } from './radiobox'
import { Select } from './select'
// import { Switch } from "./switch";
import { Text } from './text'
import { Hook } from "./Hook"
import { List } from "./List"

const Components = {

  // image:(props) => <Image {...props} />,
  button: (props) => <Button {...props} />,
  checkbox: (props) => <Checkbox {...props} />,
  fieldset: (props) => <Fieldset {...props} />,
  label: (props) => <Label {...props} />,
  radiobox: (props) => <Radio {...props} />,
  select: (props) => <Select {...props} />,
  // switch: (props) => <Switch {...props} />,
  text: (props) => <Text {...props} />,
  hook: (props) => <Hook {...props} />,
  list: (props) => <List {...props} />,

  // mae-web-kit
  demo: (props) => <Demo {...props} />,
  header: (props) => <Header {...props} />,
  tab: (props) => <Tab {...props} />,
  showModal: (props) => <ShowModal {...props} />
}

export const renderComponent = (type, propsItems) => {
  // find the respective type from dictionary
  const SelectedComponent = Components && Components[type]
  // to ensure it is not undefined
  // prevent rendering error
  if (SelectedComponent === undefined) return null

  // return component with container together
  return SelectedComponent({ ...propsItems })
  //return renderContainer(selectedComponent({ ...propsItems }))
}

// const renderContainer = (children) => <View style={{ flex: 1 }}>{children}</View>;

export const validationResolver = {
  noteq: async (item, value) => {
    return !(value === item.value)
    // return (value !== "" && !item.value.includes(value)) || false;
  },
  eq: async (item, value) => {
    return value === item.value
  },
  exist: async (item, value) => {
    return value !== ''
  },
  eq1: async (item, value) => {
    return (value !== '' && item.value.includes(value)) || false
  }
}
