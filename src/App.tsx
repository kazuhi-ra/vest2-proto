import React, { useState, useMemo, useCallback } from 'react'
import styled from '@emotion/styled'

import Images from 'Images'
import StopButton from 'StopButton'
import StartButton from 'StartButton'
import OnceAgainButton from 'OnceAgainButton'
import TwitterShareButton from 'TwitterShareButton'

const heads = ['h1', 'h2', 'h3']
const vests = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9']
const foots = ['p1', 'p2', 'p3', 'p4', 'p5']

const INTERVAL = 1000
export type IntervalID = null | NodeJS.Timeout
export type SetId = React.Dispatch<React.SetStateAction<IntervalID>>

const App = () => {
  console.log('App')
  const [head, setHead] = useState(0)
  const [vest, setVest] = useState(0)
  const [foot, setFoot] = useState(0)
  const [headId, setHeadId] = useState<IntervalID>(null)
  const [vestId, setVestId] = useState<IntervalID>(null)
  const [footId, setFootId] = useState<IntervalID>(null)
  const [isFirstTime, setFirstTime] = useState(true)

  const [panelsLeft, setPanelsLeft] = useState(3)

  const isPlaying = useMemo(() => !!(headId || vestId || footId), [
    headId,
    vestId,
    footId,
  ])

  const start = useCallback(() => {
    if (isPlaying) return

    setPanelsLeft(3)

    setHeadId(
      setInterval(() => {
        const headsLength = Math.floor(Math.random() * heads.length)
        setHead(headsLength)
      }, INTERVAL)
    )

    setVestId(
      setInterval(() => {
        const vestsLength = Math.floor(Math.random() * vests.length)
        setVest(vestsLength)
      }, INTERVAL)
    )

    setFootId(
      setInterval(() => {
        const footsLength = Math.floor(Math.random() * foots.length)
        setFoot(footsLength)
      }, INTERVAL)
    )
  }, [isPlaying])

  const stop = useCallback(
    (intervalID: IntervalID, setId: SetId) => {
      if (!isPlaying) return
      if (intervalID === null) return

      clearInterval(intervalID)
      setId(null)

      setPanelsLeft(prev => prev - 1)

      if (panelsLeft === 1 && isFirstTime === true) {
        setFirstTime(false)
      }
    },
    [isFirstTime, isPlaying, panelsLeft]
  )

  return (
    <div className='wrapper'>
      <Images
        headSrc={heads[head]}
        vestSrc={vests[vest]}
        footSrc={foots[foot]}
      />
      <ButtonsWrapper>
        <StopButton
          intervalId={headId}
          setIntervalId={setHeadId}
          stop={stop}
          isPlaying={isPlaying}
        />
        <StopButton
          intervalId={vestId}
          setIntervalId={setVestId}
          stop={stop}
          isPlaying={isPlaying}
        />
        <StopButton
          intervalId={footId}
          setIntervalId={setFootId}
          stop={stop}
          isPlaying={isPlaying}
        />
      </ButtonsWrapper>
      <ButtonsWrapper>
        {isFirstTime ? (
          <StartButton start={start} isPlaying={isPlaying} />
        ) : (
          <>
            <OnceAgainButton start={start} isPlaying={isPlaying} />
            <TwitterShareButton isPlaying={isPlaying} />
          </>
        )}
      </ButtonsWrapper>
    </div>
  )
}

const ButtonsWrapper = styled('div')`
  /* background-color: #abab; */
  width: 300px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: row;
`

// export default React.memo(App)
export default App
