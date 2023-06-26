import React, { useState } from 'react'
import { Button, Picker, Space } from 'antd-mobile'
import { DownOutline } from "antd-mobile-icons";
import Block from '../block'
import Error from '../error'
import { getStyle } from '../tailwind'
import './index.scss'

const Item = (props) => {
    const { titleClassName, contentClassName, title, content } = props
    return (
        <div className='container-list'>
            <div className={`${titleClassName} title-list`}>{title}</div>
            <div className={`${contentClassName} content-list`}>{content}</div>
        </div>
    )
}

const List = (props) => {
    //Access to main props
    const [visible, setVisible] = useState(false);

    //Injected at runtime
    const { item, field, managedCallback } = props

    //Always check to not render with error ;)
    if (item === undefined) return null


    const { value, onChange } = field
    const {
        theme = '',
        label = '',
        tooltip = '',
        options,
        placeholder
    } = item

    const onSelect = (val, extend) => {
        onChange({ val })
    }

    const onClick = () => setVisible(true)
    const onClose = () => setVisible(false)
    const onConfirm = (val, extend) => onChange(extend.items[0].label)

    console.log(options, 'listttttt')
    
    return (
        options.map(el => {
            console.log(el, 'listttttt')
            return Item(el);
        })
    )
}

export default List
