import { calculateDays } from "./daysRemainingCalculator";

describe('calcualteDays', () => {
  describe('amountAlreadySaved', () => {
    test('returns 0 if there is already enough milk', () => {
      const days = calculateDays({
        amountProducedPerDay: 0,
        amountDrinkPerDay: 100,
        numberOfDaysDrinking: 1,
        amountAlreadySaved: 1000
        
      })
  
      expect(days).toBe(0)
    })

    test('returns 1 if there is 1 days worth saved but 2 are required', () => {
      const days = calculateDays({
        amountProducedPerDay: 200,
        amountDrinkPerDay: 100,
        numberOfDaysDrinking: 2,
        amountAlreadySaved: 100
        
      })
  
      expect(days).toBe(1)
    })
  })

  test('returns 10 when producing 100, drinking 1, and needing 900', () => {
    const days = calculateDays({
      amountProducedPerDay: 1000,
      amountDrinkPerDay: 500,
      numberOfDaysDrinking: 10,
      amountAlreadySaved: 0
      
    })

    expect(days).toBe(5)
  })

  test('returns total num of days if never safe enough', () => {
    const produceAmt = 10
    const daysDrinking = 20

    const days = calculateDays({
      amountProducedPerDay: produceAmt,
      amountDrinkPerDay: produceAmt,
      numberOfDaysDrinking: daysDrinking,
      amountAlreadySaved: 0
      
    })

    expect(days).toBe(daysDrinking)
  })
})