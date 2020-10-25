import React, { useState, useMemo, useCallback } from 'react'

import Images from 'Images'

const heads = ['頭1', '頭2', '頭3', '頭4', '頭5', '頭6', '頭7']
const vests = ['胴1', '胴2', '胴3', '胴4', '胴5', '胴6', '胴7']
const foots = ['脚1', '脚2', '脚3', '脚4', '脚5', '脚6', '脚7']

const INTERVAL = 2000
type intervalID = null | NodeJS.Timeout

const App = () => {
  console.log('App')
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
      <Images
        headSrc={heads[head]}
        vestSrc={vests[vest]}
        footSrc={foots[foot]}
      />
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

// export default React.memo(App)
export default App
