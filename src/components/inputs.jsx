import { useState } from 'react'

import { calculateDays } from './utils/daysRemainingCalculator'
import Segment from './segment'
import Results from './results'
import './input.css'

const defaultSegment = {
  segmentEndDate: new Date(),
  amountDrinkPerDay: 0
}

const Inputs = () => {
  const [amountAlreadySaved, setAmountAlreadySaved] = useState(0)
  const [segments, setSegments] = useState([defaultSegment])
  const [amountProducedPerDay, setAmountProducedPerDay] = useState(0)
  const [remainingDays, setRemainingDays] = useState(0)
  const [dataPoints, setDataPoints] = useState([])

  const handleChange = (e, setter) => {
    const value = e.target.value
    setter(parseInt(value))
  }

  const callDayCalculator = () => {
    let startDate = new Date()
    startDate.setHours(0, 0, 0, 0)
    const segmentsWithDays = segments.reduce((total, {segmentEndDate, amountDrinkPerDay}) => {
      const numberOfDaysDrinking = (segmentEndDate - startDate) / (1000*60*60*24)
      startDate = segmentEndDate
      return [...total, {amountDrinkPerDay, numberOfDaysDrinking}]
    }, [])
    console.log(segmentsWithDays)

    const {remainingDays, dataPoints} = calculateDays({amountProducedPerDay, amountAlreadySaved, segments: segmentsWithDays})
    setRemainingDays(remainingDays)
    setDataPoints(dataPoints)
  }

  const setSegmentForIndex = (index) => {
    return (newSegment) => {
      setSegments([...segments.slice(0, index), newSegment, ...segments.slice(index + 1)])
    }
  }

  const removeSegment = (index) => {
    return () => {
      setSegments([...segments.slice(0, index), ...segments.slice(index + 1)])
    }
  }

  const addNewSegment = () => {
    setSegments([...segments, defaultSegment])
  }

  return (
    <div className='main-wrapper'>
      <div className='left-panel'>
        <fieldset className='form-group'>
          <legend>Milk information</legend>
          <div className='input-container'>
            <label className='input-label' htmlFor='amount-already-saved'>Amount Saved</label>
            <input
              type="number"
              name='amount-already-saved'
              value={amountAlreadySaved}
              onChange={(e) => handleChange(e, setAmountAlreadySaved)}
            />
          </div>
          <div className='input-container'>
            <label className='input-label' htmlFor='amount-produced-per-day'>Amount Produced Per Day</label>
            <input
              type='number'
              name='amount-produced-per-day'
              value={amountProducedPerDay}
              onChange={(e) => handleChange(e, setAmountProducedPerDay)}
            />
          </div>
          
        </fieldset>
        {segments.map((segment, index) => (
          <Segment
            index={index}
            key={index}
            segment={segment}
            setSegment={setSegmentForIndex(index)}
            removeSegment={removeSegment(index)}
          />
        ))}
        <button onClick={addNewSegment}>+</button>
        <button onClick={callDayCalculator}>Calculate!</button>
        
      </div>
      <div className='right-panel'>
        <Results remainingDays={remainingDays} dataPoints={dataPoints}/>
      </div>
    </div>
  )
}
 export default Inputs