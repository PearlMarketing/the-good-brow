import React, { useContext } from "react"
import { Box, Heading, Text, ResponsiveContext } from "grommet"
import { InstagramPosts } from "."

const Container = ({ title, text, nodes }) => {
  const size = useContext(ResponsiveContext)
  const extraProps =
    size !== `small` ? { style: { gridColumnStart: 2 } } : undefined
  return (
    <Box {...extraProps} style={{ width: "80%", margin: "0 auto" }}>
      <InstagramPosts nodes={nodes} />
    </Box>
  )
}

export default Container