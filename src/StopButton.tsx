import React, { FC } from 'react'
import { IntervalID, SetId } from 'App'

type Props = {
  intervalId: IntervalID
  setIntervalId: SetId
  stop: (intervalId: IntervalID, setIntervalId: SetId) => void
  isPlaying: boolean
}

const StopButton: FC<Props> = ({
  intervalId,
  setIntervalId,
  stop,
  isPlaying,
}) => {
  console.log('StopButton')
  return isPlaying && intervalId === null ? (
    <div>STOP(inActive)</div>
  ) : (
    <div onClick={() => stop(intervalId, setIntervalId)}>STOP</div>
  )
}

export default React.memo(StopButton)
