export const calculateDays = ({
  amountAlreadySaved,
  amountProducedPerDay,
  segments
}) => {
  let currentSavings = amountAlreadySaved
  let days = 0
  console.log('segments', segments)
  let remainingNeed = segments.reduce((total, {amountDrinkPerDay, numberOfDaysDrinking}) => {
    console.log('amountDrinkPerDay', amountDrinkPerDay)
    console.log('numberOfDaysDrinking', numberOfDaysDrinking)
    return total + (amountDrinkPerDay * numberOfDaysDrinking)
  }, 0)
  console.log('remainingNeeded', remainingNeed)

  segments.forEach(({amountDrinkPerDay, numberOfDaysDrinking}) => {
    const savingPerDay = amountProducedPerDay - amountDrinkPerDay

    let i = 0
    while (remainingNeed > currentSavings && i < numberOfDaysDrinking) {
      remainingNeed -= amountDrinkPerDay
      currentSavings += savingPerDay
      days += 1
      i += 1
    }  
  })

  return days
}