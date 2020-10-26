import React, { FC } from 'react'
import styled from '@emotion/styled'

import { IntervalID, SetId } from 'Roulette'

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
    <StopButtonInactive>STOP</StopButtonInactive>
  ) : (
    <StopButtonActive onClick={() => stop(intervalId, setIntervalId)}>
      STOP
    </StopButtonActive>
  )
}

const StopButtonActive = styled('button')`
  margin: 0 auto 4px auto;
  cursor: pointer;
  width: 56px;
  height: 50px;
  background-color: #ef454a;
  box-shadow: 0 4px 0 #bb4038;
  border-radius: 26px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  user-select: none;

  &:active {
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: none;
  }
`

const StopButtonInactive = styled('button')`
  margin: 0 auto 4px auto;
  cursor: pointer;
  width: 56px;
  height: 50px;
  background-color: #ef454a;
  box-shadow: 0 4px 0 #bb4038;
  border-radius: 26px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  user-select: none;
  opacity: 0.85;
  pointer-events: none;
  cursor: default;
`

export default React.memo(StopButton)
