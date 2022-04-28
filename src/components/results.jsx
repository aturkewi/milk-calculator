import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';
const data = [{day: 1, amt: 1000}, {day: 2, amt: 2000}, {day: 2, amt: 3000}];

const Results = ({remainingDays, dataPoints}) => {
  return(
    <>
      <p>Days remaining: {remainingDays}</p>
      <LineChart width={400} height={400} data={dataPoints}>
        <Line type="monotone" dataKey="amountNeeded" stroke="#8884d8" />
        <Line type="monotone" dataKey="amountSaved" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  )
}

export default Results