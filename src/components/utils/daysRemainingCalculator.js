export const calculateDays = ({
  amountAlreadySaved,
  amountProducedPerDay,
  segments
}) => {
  let amountSaved = amountAlreadySaved
  let days = 0
  let remainingDays = null

  let startingNeed = segments.reduce((total, {amountDrinkPerDay, numberOfDaysDrinking}) => {
    return total + (amountDrinkPerDay * numberOfDaysDrinking)
  }, 0)
  let amountNeeded = startingNeed

  const dataPoints = segments.reduce((dataPoints, {amountDrinkPerDay, numberOfDaysDrinking}) => {
    const lastDay = days + numberOfDaysDrinking
    let segmentData = []
    for(let i=days; i < lastDay; i++){
      if(remainingDays === null && amountSaved >= amountNeeded){
        remainingDays = days
      }

      days ++
      amountSaved = amountSaved + (amountProducedPerDay - amountDrinkPerDay)
      amountNeeded = amountNeeded - amountDrinkPerDay

      segmentData = [...segmentData, {day: days, amountSaved, amountNeeded}]
    }

    return [...dataPoints, ...segmentData]
  }, [{day: 0, amountSaved, amountNeeded}])

  return {remainingDays, dataPoints}
}