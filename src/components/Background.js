import React from 'react'
import styled from 'styled-components'

import backgroundImage from '../images/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg'

const StyledBackground = styled.div`
  &:after {
    background-image:	url(${backgroundImage});
  }
`

const Background = () => {
  return (
    <StyledBackground id="bg"></StyledBackground>
  )
}

export default Background