const Segment = ({index, segment, setSegment, removeSegment}) => {
  const {numberOfDaysDrinking, amountDrinkPerDay} = segment

  const handleChange = (event, key) => {
    const value = event.target.value
    setSegment({...segment, [key]: value})
  }

  return (
    <fieldset className='form-group'>
      <button onClick={removeSegment}>−</button>
      <legend>Segment {index + 1}</legend>
      <div>
        <label className='input-label' htmlFor='number-of-days-drinking'>Drinking for how many days</label>
        <input
          type='number'
          name='number-of-days-drinking'
          value={numberOfDaysDrinking}
          onChange={(e) => handleChange(e, 'numberOfDaysDrinking')}
        />
      </div>
      <div>
        <label className='input-label' htmlFor='amount-drink-per-day'>Amount drink per day (mL)</label>
        <input
          type='number'
          name='amount-drink-per-day'
          value={amountDrinkPerDay}
          onChange={(e) => handleChange(e, 'amountDrinkPerDay')}
        />
      </div>
    </fieldset>
  )
}

export default Segment