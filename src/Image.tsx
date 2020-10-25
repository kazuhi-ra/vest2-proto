import React, { FC } from 'react'
import styled from '@emotion/styled'

type Props = {
  src: string
  imgHeight: number
}

const Image: FC<Props> = ({ src, imgHeight }) => {
  return (
    <img
      src={`./images/${src}.jpg`}
      alt='服の画像'
      width='300'
      height={imgHeight}
    />
  )
}

const Img = styled('img')`
  
`

export default React.memo(Image)
// export default Image
