import React, { FC } from 'react'

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

export default React.memo(Image)
// export default Image
