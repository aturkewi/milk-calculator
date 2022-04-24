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