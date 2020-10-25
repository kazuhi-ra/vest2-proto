import React, { FC } from 'react'

import Image from 'Image'

type Props = {
  headSrc: string
  vestSrc: string
  footSrc: string
}

const Images: FC<Props> = ({ headSrc, vestSrc, footSrc }) => {
  return (
    <div>
      <Image src={headSrc} />
      <Image src={vestSrc} />
      <Image src={footSrc} />
    </div>
  )
}

export default Images
// export default React.memo(Images)
