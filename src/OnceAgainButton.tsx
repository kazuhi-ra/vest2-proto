import React, { FC } from 'react'

type Props = {
  start: () => void
}

const OnceAgainButton: FC<Props> = ({ start }) => {
  console.log('OnceAgainButton')
  return (
    <div onClick={() => start()}>もう一度</div>
  )
}

export default React.memo(OnceAgainButton)
