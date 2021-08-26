import React, { useContext } from 'react'
import { Box, Heading, Text, ResponsiveContext } from 'grommet'
import { InstagramPosts } from './InstagramPosts'
import instagramImg from '../../images/Instagram-Button-715x715.png'

const Container = ({ title, text, nodes, timeout }) => {
  const size = useContext(ResponsiveContext)
  const extraProps =
    size !== `small` ? { style: { gridColumnStart: 2 } } : undefined
  return (
    <Box
      {...extraProps}
      className="instagram-grid"
      style={timeout ? { display: 'none', opacity: '0' } : { width: '80%', margin: '0 auto', opacity: '1' }}
    >
      <a
        href="https://www.instagram.com/thegoodbrow.nh/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 auto 20px', display: 'inline-block', border: 'none' }}
      >
        <img
          src={instagramImg}
          style={{ width: '300px' }}
        />
      </a>
      {/* <InstagramPosts nodes={nodes} /> */}
    </Box>
  )
}

export default Container
