import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  padding: 10px 25px;
  border-radius: 4px;
  border: 2px solid rgba(255,255,255,.6);
  display: inline-block;
  transition: border .3s, background .3s, color .3s;
  color: rgba(255,255,255,.8);
  &:hover {
    border: 2px solid rgba(255,255,255,.6);
    background: rgba(255, 255, 255, 0.075);
    color: rgba(255,255,255,1);
  }
`

const Button = ({ href, target, children }) => (
  <StyledButton href={href} target={target} rel="noopener noreferrer">
    <div>
      {children}
    </div>
  </StyledButton>
)

export default Button