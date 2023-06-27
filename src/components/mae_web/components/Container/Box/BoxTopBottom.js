import React from 'react'
import { Block } from '../../../../@vb/components/Block'
import './index.scss'
export const BoxTopBottom = (props) => {
  // const { title, amount,tooltip } = props
  const { item } = props;
  const { header, description, tooltip = "" } = item;


  return (
    <div
      style={{
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFFFFF',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
        borderRadius: '8px',
        marginTop: '1rem',
        marginBottom:"2rem"
      }}
    >
      <Block titleClassName='box-topBottom-title' tooltip={tooltip.length > 0 ? tooltip : false} title={header} />
      <div className='box-topBottom-amount'>{description}</div>
    </div>
  )
}
