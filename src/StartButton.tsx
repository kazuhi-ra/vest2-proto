import React, { FC } from 'react'
import styled from '@emotion/styled'

type Props = {
  start: () => void
  isPlaying: boolean
}

const StartButton: FC<Props> = ({ start, isPlaying }) => {
  return !isPlaying ? (
    <StartButtonActive onClick={() => start()}>START</StartButtonActive>
  ) : (
    <StartButtonInactive>START</StartButtonInactive>
  )
}

const StartButtonActive = styled('button')`
  color: #dedede;
  cursor: pointer;
  width: 260px;
  height: 38px;
  background-color: #3498db;
  box-shadow: 0 4px 0 #2880b9;
  border-radius: 8px;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  margin: 0 auto;

  &:active {
    margin: 6px auto 0;
    box-shadow: 0 1px 0 #2880b9;
  }
`

const StartButtonInactive = styled('button')`
  color: #dedede;
  cursor: pointer;
  width: 260px;
  height: 38px;
  background-color: #3498db;
  box-shadow: 0 4px 0 #2880b9;
  border-radius: 8px;
  line-height: 38px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  margin: 0 auto;

  opacity: 0.85;
  pointer-events: none;
  cursor: default;
`

export default React.memo(StartButton)
