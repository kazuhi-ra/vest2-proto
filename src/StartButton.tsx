import React, { FC } from 'react'

type Props = {
  start: () => void
}

const StartButton: FC<Props> = ({ start }) => {
  console.log('StartButton')
  return (
    <div onClick={() => start()}>START</div>
  )
}

export default React.memo(StartButton)
