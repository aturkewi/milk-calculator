import { MinusCircle } from 'phosphor-react'
import DatePicker from 'react-date-picker'

import './segment.css'

const Segment = ({index, segment, setSegment, removeSegment}) => {
  const {segmentEndDate, amountDrinkPerDay} = segment

  const handleChange = (event, key) => {
    const value = event.target.value
    setSegment({...segment, amountDrinkPerDay: parseInt(value)})
  }

  const handleDateChange = (date) => {
    console.log('date', date)
    setSegment({...segment, segmentEndDate: date})
  }

  return (
    <fieldset className='form-group'>
      <legend>Segment {index + 1}</legend>
      <div className='segment'>
        <div> 
          <div className='input-container'>
            <label className='input-label' htmlFor='segment-end-date'>Segment End Date</label>
            <DatePicker
              className='date-picker'
              onChange={handleDateChange}
              value={segmentEndDate}
              name='segment-end-date'
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
          <MinusCircle
            className='clickable-icon'
            onClick={removeSegment}
          />
        }
      </div>
    </fieldset>
  )
}

export default Segment