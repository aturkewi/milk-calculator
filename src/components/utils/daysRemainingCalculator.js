// import { calculateDays } from "./daysRemainingCalcularor.spec";

// describe('calcualteDays', () => {
//   it('returns 0 if there is already enough milk', () => {
//     const days = calculateDays({
//       amountProducedPerDay: 0,
//       amountDrinkPerDay: 100,
//       numberOfDaysDrinking: 1,
//       amountAlreadySaved: 1000
      
//     })

//     expect(days).toBe(0)
//   })
// })

export const calculateDays = ({
  amountProducedPerDay,
  amountDrinkPerDay,
  numberOfDaysDrinking,
  amountAlreadySaved
}) => {
  const savingPerDay = amountProducedPerDay - amountDrinkPerDay

  let remainingNeed = amountDrinkPerDay * numberOfDaysDrinking
  let currentSavings = amountAlreadySaved
  let days = 0

  while (remainingNeed > currentSavings) {
    remainingNeed -= amountDrinkPerDay
    currentSavings += savingPerDay
    days += 1
  }

  return days
}