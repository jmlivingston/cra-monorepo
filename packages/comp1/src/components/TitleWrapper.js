import React from 'react'

import Title from './Title'

const TitleWrapper = ({ color, title }) => {
  return (
    <div style={{ backgroundColor: color, padding: '10px' }}>
      <Title title={title} />
    </div>
  )
}

export default TitleWrapper
