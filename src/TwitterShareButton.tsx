import React, { FC } from 'react'

type Props = {
  isPlaying: boolean
}

const TwitterShareButton: FC<Props> = ({ isPlaying }) => {
  console.log('TwitterShareButton')
  return !isPlaying ? <div>これにする</div> : <div>これにする(inActive)</div>
}

export default React.memo(TwitterShareButton)
