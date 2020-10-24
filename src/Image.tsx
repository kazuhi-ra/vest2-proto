import React, { FC } from 'react'

type Props = {
  src: string
}

const Image: FC<Props> = ({ src }) => {
  return <div>{src}</div>
}

export default React.memo(Image)
// export default Image