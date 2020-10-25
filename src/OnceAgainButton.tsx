import React, { FC } from 'react'

type Props = {
  start: () => void
  isPlaying: boolean
}

const OnceAgainButton: FC<Props> = ({ start, isPlaying }) => {
  console.log('OnceAgainButton')
  return !isPlaying ? (
    <div onClick={() => start()}>もう一度</div>
  ) : (
    <div>もう一度(inActive)</div>
  )
}

export default React.memo(OnceAgainButton)
