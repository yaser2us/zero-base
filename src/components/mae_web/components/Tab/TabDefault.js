import React, { Children, useRef, useState } from 'react'
import { Block } from '../../../@vb/components/Block'
import { Tabs, Swiper } from 'antd-mobile'
import SwiperRef from 'antd-mobile/es/components/swiper'

import './index.scss'

const TabDefault = (props) => {
  const { item } = props

  // May require code cleanup. Need to conduct discussion with team on the placement of the tabItems
  const { extra } = item;
  const { tabItems } = extra;
  const items = tabItems;

  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)

  console.log('TabDefault', items)
  return (
    <Block padding='0'>
      <Tabs
        className='navigationTabs'
        activeKey={items[activeIndex].key}
        onChange={(key) => {
          const index = items.findIndex((item) => item.key === key)
          setActiveIndex(index)
          // swiperRef.current?.swipeTo(index)
        }}
      >
        {items.map((item) => (
          <Tabs.Tab key={item.key} title={item.title} />
        ))}
      </Tabs>

      <Swiper
        direction='horizontal'
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index)
        }}
      >
        {items.map((item) => (
          <Swiper.Item>
            <div style={{height:"100px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"15px",backgroundColor:"white"}}>{item.content}</div>
          </Swiper.Item>
        ))}
      </Swiper>
    </Block>
  )
}

export default TabDefault
