import React, { FC } from 'react'

type Props = {
  start: () => void
  isPlaying: boolean
}

const StartButton: FC<Props> = ({ start, isPlaying }) => {
  console.log('StartButton')
  return (
    !isPlaying ? (
      <div onClick={() => start()}>START</div>
    ) : (
      <div>START(inActive)</div>
    )
  )
}

export default React.memo(StartButton)
