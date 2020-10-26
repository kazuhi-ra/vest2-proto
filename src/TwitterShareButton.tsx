import React, { FC } from 'react'
import styled from '@emotion/styled'

type Props = {
  isPlaying: boolean
  head: number
  vest: number
  foot: number
}

const TwitterShareButton: FC<Props> = ({ isPlaying, head, vest, foot }) => {
  const pageId = `${head + 1}${vest + 1}${foot + 1}`

  return !isPlaying ? (
    <TwitterShareButtonActive>
      <StyledA
        href={`http://twitter.com/share?url=https://ashitano.herokuapp.com/vest/${pageId}&text=@kazuhi_ra あしたのベストはこれです&hashtags=あしたのベスト`}
        target='_blank'
      >
        これにする
      </StyledA>
    </TwitterShareButtonActive>
  ) : (
    <TwitterShareButtonInactive>これにする</TwitterShareButtonInactive>
  )
}

const TwitterShareButtonActive = styled('button')`
  color: #dedede;
  cursor: pointer;
  width: 120px;
  height: 36px;
  background-color: #00acee;
  box-shadow: 0 4px 0 #3488bf;
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

const StyledA = styled('a')`
  color: #ffffff;
  text-decoration: none;
`

const TwitterShareButtonInactive = styled('button')`
  color: #dedede;
  cursor: pointer;
  width: 120px;
  height: 36px;
  background-color: #00acee;
  box-shadow: 0 4px 0 #3488bf;
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

export default React.memo(TwitterShareButton, (prev, next) => {
  return next.isPlaying === true
})
