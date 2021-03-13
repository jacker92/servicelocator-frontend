import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Loader = () => {
  const css = {
    margin: 'auto',
    display: 'block'
  }

  return (
    <ClipLoader
      loading={true}
      css={css}
      size={150}
      color="#349beb"
    />
  )
}

export default Loader