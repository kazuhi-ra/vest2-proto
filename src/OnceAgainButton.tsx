import React, { FC } from 'react'
import styled from '@emotion/styled'

type Props = {
  start: () => void
  isPlaying: boolean
}

const OnceAgainButton: FC<Props> = ({ start, isPlaying }) => {
  return !isPlaying ? (
    <OnceAgainButtonActive onClick={() => start()}>
      もう一度
    </OnceAgainButtonActive>
  ) : (
    <OnceAgainButtonInactive>もう一度</OnceAgainButtonInactive>
  )
}

const OnceAgainButtonActive = styled('button')`
  color: white;
  cursor: pointer;
  width: 120px;
  height: 36px;
  background-color: #e9b545;
  box-shadow: 0 4px 0 #bb9137;
  border-radius: 8px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  margin: 0 auto;
  text-decoration: none;

  &:active {
    margin: 6px auto 0;
    box-shadow: none;
  }
`

const OnceAgainButtonInactive = styled('button')`
  color: white;
  cursor: pointer;
  width: 120px;
  height: 36px;
  background-color: #e9b545;
  box-shadow: 0 4px 0 #bb9137;
  border-radius: 8px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  margin: 0 auto;
  text-decoration: none;

  opacity: 0.85;
  pointer-events: none;
  cursor: default;
`

export default React.memo(OnceAgainButton)
