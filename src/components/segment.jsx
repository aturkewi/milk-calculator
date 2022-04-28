import './segment.css'

const Segment = ({index, segment, setSegment, removeSegment}) => {
  const {numberOfDaysDrinking, amountDrinkPerDay} = segment

  const handleChange = (event, key) => {
    const value = event.target.value
    setSegment({...segment, [key]: parseInt(value)})
  }

  return (
    <fieldset className='form-group'>
      <legend>Segment {index + 1}</legend>
      <div className='segment'>
        <div> 
          <div className='input-container'>
            <label className='input-label' htmlFor='number-of-days-drinking'>Drinking for how many days</label>
            <input
              type='number'
              name='number-of-days-drinking'
              value={numberOfDaysDrinking}
              onChange={(e) => handleChange(e, 'numberOfDaysDrinking')}
            />
          </div>
          <div className='input-container'>
            <label className='input-label' htmlFor='amount-drink-per-day'>Amount drink per day (mL)</label>
            <input
              type='number'
              name='amount-drink-per-day'
              value={amountDrinkPerDay}
              onChange={(e) => handleChange(e, 'amountDrinkPerDay')}
            />
          </div>
        </div>
        {index > 0 &&
          <button onClick={removeSegment}>−</button>
        }
      </div>
    </fieldset>
  )
}

export default Segment