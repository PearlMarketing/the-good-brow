import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const StyledBackground = styled.div`
  &:after {
    background-image: url(${props => props.background});
  }
`

const Background = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "background-image.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2048) {
                src
              }
            }
          }
        }
      `}
      render={data => (
        <StyledBackground
          id="bg"
          background={data.file.childImageSharp.fluid.src}
        ></StyledBackground>
      )}
    />
  )
}

export default Background
