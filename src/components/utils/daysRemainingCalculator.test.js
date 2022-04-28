import { calculateDays } from "./daysRemainingCalculator";

// describe('calcualteDays', () => {
//   describe('amountAlreadySaved', () => {
//     test('returns 0 if there is already enough milk', () => {
//       const days = calculateDays({
//         amountProducedPerDay: 0,
//         amountAlreadySaved: 1000,
//         segments: [
//           {
//             amountDrinkPerDay: 100,
//             numberOfDaysDrinking: 1
//           }
//         ]
//       })
  
//       expect(days).toBe(0)
//     })

//     test('returns 1 if there is 1 days worth saved but 2 are required', () => {
//       const days = calculateDays({
//         amountProducedPerDay: 200,
//         amountAlreadySaved: 100,
//         segments: [
//           {
//             amountDrinkPerDay: 100,
//             numberOfDaysDrinking: 2
//           }
//         ]
//       })
  
//       expect(days).toBe(1)
//     })
//   })

//   test('returns 10 when producing 100, drinking 1, and needing 900', () => {
//     const days = calculateDays({
//       amountProducedPerDay: 1000,
//       amountAlreadySaved: 0,
//       segments: [
//         {
//           amountDrinkPerDay: 500,
//           numberOfDaysDrinking: 10
//         }
//       ]
//     })

//     expect(days).toBe(5)
//   })

//   test('returns total num of days if never safe enough', () => {
//     const produceAmt = 10
//     const daysDrinking = 20

//     const days = calculateDays({
//       amountProducedPerDay: produceAmt,
//       amountAlreadySaved: 0,
//       segments: [
//         {
//           amountDrinkPerDay: produceAmt,
//           numberOfDaysDrinking: daysDrinking
//         }
//       ]
      
//     })

//     expect(days).toBe(daysDrinking)
//   })

//   describe('multiple segments', () => {
//     test('some test name', () => {
//       const days = calculateDays({
//         amountProducedPerDay: 1000,
//         amountAlreadySaved: 0,
//         segments: [
//           {
//             amountDrinkPerDay: 900,
//             numberOfDaysDrinking: 10
//           },
//           {
//             amountDrinkPerDay: 200,
//             numberOfDaysDrinking: 10
//           }
//         ]
//       })
//       // After 10 days: 1000 saved, 2000 needed
//       // After 11 days: 1800 saved, 1800 needed
  
//       expect(days).toBe(11)
//     })
//   })
// })

describe('createData', () => {
  describe('amountAlreadySaved', () => {
    test('returns 0 if there is already enough milk', () => {
      const {remainingDays} = calculateDays({
        amountProducedPerDay: 0,
        amountAlreadySaved: 1000,
        segments: [
          {
            amountDrinkPerDay: 100,
            numberOfDaysDrinking: 1
          }
        ]
      })
  
      expect(remainingDays).toBe(0)
    })

    test('returns 1 if there is 1 days worth saved but 2 are required', () => {
      const {remainingDays} = calculateDays({
        amountProducedPerDay: 200,
        amountAlreadySaved: 100,
        segments: [
          {
            amountDrinkPerDay: 100,
            numberOfDaysDrinking: 2
          }
        ]
      })
  
      expect(remainingDays).toBe(1)
    })
  })

  test('returns 10 when producing 100, drinking 1, and needing 900', () => {
    const {remainingDays} = calculateDays({
      amountProducedPerDay: 1000,
      amountAlreadySaved: 0,
      segments: [
        {
          amountDrinkPerDay: 500,
          numberOfDaysDrinking: 10
        }
      ]
    })

    expect(remainingDays).toBe(5)
  })

  test('returns null num of days if never safe enough', () => {
    const produceAmt = 10
    const daysDrinking = 20

    const {remainingDays} = calculateDays({
      amountProducedPerDay: produceAmt,
      amountAlreadySaved: 0,
      segments: [
        {
          amountDrinkPerDay: produceAmt,
          numberOfDaysDrinking: daysDrinking
        }
      ]
      
    })

    expect(remainingDays).toBe(null)
  })

  describe('multiple segments', () => {
    test('some test name', () => {
      const {remainingDays} = calculateDays({
        amountProducedPerDay: 1000,
        amountAlreadySaved: 0,
        segments: [
          {
            amountDrinkPerDay: 900,
            numberOfDaysDrinking: 10
          },
          {
            amountDrinkPerDay: 200,
            numberOfDaysDrinking: 10
          }
        ]
      })
      // After 10 days: 1000 saved, 2000 needed
      // After 11 days: 1800 saved, 1800 needed
  
      expect(remainingDays).toBe(11)
    })
  })
})