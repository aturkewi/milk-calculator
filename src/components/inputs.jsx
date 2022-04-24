import { useState } from 'react'

import { calculateDays } from './utils/daysRemainingCalculator'
import './input.css'

const Inputs = () => {
  const [amountAlreadySaved, setAmountAlreadySaved] = useState(0)
  const [amountDrinkPerDay, setAmountDrinkPerDay] = useState(0)
  const [numberOfDaysDrinking, setNumberOfDaysDrinking] = useState(0)
  const [amountProducedPerDay, setAmountProducedPerDay] = useState(0)
  const [remainingDays, setRemainingDays] = useState(0)

  const handleChange = (e, setter) => {
    const value = e.target.value
    setter(value)
  }

  const callDayCalculator = () => {
    const days = calculateDays({amountProducedPerDay, amountDrinkPerDay, numberOfDaysDrinking, amountAlreadySaved})
    setRemainingDays(days)
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
          <label className='input-label' htmlFor='amount-drink-per-day'>Amount drink per day (mL)</label>
          <input
            type='number'
            name='amount-drink-per-day'
            value={amountDrinkPerDay}
            onChange={(e) => handleChange(e, setAmountDrinkPerDay)}
          />
        </div>
      </fieldset>
      <fieldset className='form-group'>
        <legend>Leg 1</legend>
        <div>
          <label className='input-label' htmlFor='number-of-days-drinking'>Drinking for how many days</label>
          <input
            type='number'
            name='number-of-days-drinking'
            value={numberOfDaysDrinking}
            onChange={(e) => handleChange(e, setNumberOfDaysDrinking)}
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
      <button onClick={callDayCalculator}>Calculate!</button>
      <p>Amount of days to pump: {remainingDays}</p>
    </>
  )
}
 export default Inputs