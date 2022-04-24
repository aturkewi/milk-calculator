import { useState } from 'react'

import { calculateDays } from './utils/daysRemainingCalculator'
import Segment from './segment'
import './input.css'

const Inputs = () => {
  const [amountAlreadySaved, setAmountAlreadySaved] = useState(0)
  // const [amountDrinkPerDay, setAmountDrinkPerDay] = useState(0)
  // const [numberOfDaysDrinking, setNumberOfDaysDrinking] = useState(0)
  const [segments, setSegments] = useState([{
    numberOfDaysDrinking: 0.,
    amountDrinkPerDay: 0
  }])
  const [amountProducedPerDay, setAmountProducedPerDay] = useState(0)
  const [remainingDays, setRemainingDays] = useState(0)

  const handleChange = (e, setter) => {
    const value = e.target.value
    setter(value)
  }

  const callDayCalculator = () => {
    const days = calculateDays({amountProducedPerDay, amountAlreadySaved, segments})
    setRemainingDays(days)
  }

  const setSegmentForIndex = (index) => {
    return (newSegment) => {
      setSegments([...segments.slice(0, index), newSegment, ...segments(index + 1)])
    }
  }

  return (
    <>
      <fieldset className='form-group'>
        <legend>Milk information</legend>
        <div>
          <label className='input-label' htmlFor='amount-already-saved'>Amount Saved</label>
          <input
            type="number"
            name='amount-already-saved'
            value={amountAlreadySaved}
            onChange={(e) => handleChange(e, setAmountAlreadySaved)}
          />
        </div>
        <div>
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
        <Segment index={index} key={index} segment={segment} setSegment={setSegmentForIndex(index)}/>
      ))}
      <button onClick={callDayCalculator}>Calculate!</button>
      <p>Amount of days to pump: {remainingDays}</p>
    </>
  )
}
 export default Inputs