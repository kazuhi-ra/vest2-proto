import React, { FC } from 'react'
import { IntervalID, SetId } from 'App'

type Props = {
  intervalId: IntervalID
  setIntervalId: SetId
  stop: (intervalId: IntervalID, setIntervalId: SetId) => void
}

const StopButton: FC<Props> = ({ intervalId, setIntervalId, stop }) => {
  console.log('StopButton')
  return <div onClick={() => stop(intervalId, setIntervalId)}>STOP</div>
}

export default React.memo(StopButton)
