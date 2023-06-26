import React from 'react'
// import {
//     View,
//     ImageBackground,
//     ScrollView,
//     Text,
//     KeyboardAvoidingView,
//     Platform,
// } from "react-native";

// import * as Assets from "../../../assets";
import { getStyle } from '../../tailwind'
import FieldsetHeader from '../fieldsetHeader'
import Block from "./Block";

const TemplateList = {
  header: (props) => <FieldsetHeader {...props} />,
  // text: (props) => (
  //     <Text style={getStyle(props.item?.theme) ?? { flex: 1 }}>{props.child && props.child}</Text>
  // ),
  '': (props) => (
    <div style={getStyle(props.item?.theme) ?? { flex: 1 }}>
      {props.child && props.child}
    </div>
  ),
  block: (props) => (
    <div
      style={getStyle(props.item?.theme) ?? { flex: 1, paddingHorizontal: 24 }}
    >
      {props.child && props.child}
    </div>
  ),
  'screenLayout': (props) => <Block {...props} />,
  'screenContainer': (props) => <Block {...props} />
}

export default TemplateList
