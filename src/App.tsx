import React, { useState, useMemo, useCallback } from 'react'

import Image from 'Image'

const heads = ['頭1', '頭2', '頭3', '頭4']
const vests = ['胴1', '胴2', '胴3', '胴4']
const foots = ['脚1', '脚2', '脚3', '脚4']

type intervalID = null | NodeJS.Timeout

const App = () => {
  const [head, setHead] = useState(0)
  const [vest, setVest] = useState(0)
  const [foot, setFoot] = useState(0)
  const [headId, setHeadId] = useState<intervalID>(null)
  const [vestId, setVestId] = useState<intervalID>(null)
  const [footId, setFootId] = useState<intervalID>(null)
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
      }, 100)
    )

    setVestId(
      setInterval(() => {
        const vestsLength = Math.floor(Math.random() * vests.length)
        setVest(vestsLength)
      }, 100)
    )

    setFootId(
      setInterval(() => {
        const footsLength = Math.floor(Math.random() * foots.length)
        setFoot(footsLength)
      }, 100)
    )
  }, [isPlaying])

  const stop = useCallback((
    intervalID: intervalID,
    setId: React.Dispatch<React.SetStateAction<intervalID>>
  ) => {
    if (!isPlaying) return
    if (intervalID === null) return

    clearInterval(intervalID)
    setId(null)

    setPanelsLeft(prev => prev - 1)

    if (panelsLeft === 1 && isFirstTime === true) {
      setFirstTime(false)
    }
  }, [isFirstTime, isPlaying, panelsLeft])

  return (
    <div className='wrapper'>
      <div>
        <Image src={heads[head]} />
        <Image src={vests[vest]} />
        <Image src={foots[foot]} />
      </div>
      <div className='buttonWrapper'>
        <div onClick={() => stop(headId, setHeadId)}>STOP</div>
        <div onClick={() => stop(vestId, setVestId)}>STOP</div>
        <div onClick={() => stop(footId, setFootId)}>STOP</div>
      </div>
      {isFirstTime ? (<div onClick={() => start()}>START</div>) : (
      <div className='shareWrapper'>
        <div onClick={() => start()}>もう一度</div>
        <div>これにする</div>
      </div>
      )}
    </div>
  )
}

export default App
