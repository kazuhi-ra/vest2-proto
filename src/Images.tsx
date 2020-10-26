import React, { FC } from 'react'
import styled from '@emotion/styled'

import Image from 'Image'

type Props = {
  headSrc: string
  vestSrc: string
  footSrc: string
}

const Images: FC<Props> = ({ headSrc, vestSrc, footSrc }) => {
  return (
    <ImageWrapper>
      <Image src={headSrc} imgHeight={120} />
      <Image src={vestSrc} imgHeight={150} />
      <Image src={footSrc} imgHeight={232} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #baba;
  width: 100%;
  margin-bottom: 10px;
`

export default Images
// export default React.memo(Images)
