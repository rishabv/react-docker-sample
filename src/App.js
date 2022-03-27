import logo from "./logo.svg";
import "./App.css";
import {
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

function App() {
  const data = [
    {
      projectedProfit: 150000,
      AnswerRef: "one",
      Text: "Year 1",
      Score: 0,
      RespondentPercentage: 12,
      Rank: 1,
      color: "#96d3e3",
    },
    {
      projectedProfit: 250000,
      AnswerRef: "two",
      Text: "Year 2",
      Score: 0,
      RespondentPercentage: 32,
      Rank: 2,
      color: "#6bafc2",
    },
    {
      projectedProfit: 500000,
      AnswerRef: "three",
      Text: "Year 3",
      Score: 1,
      RespondentPercentage: 41,
      Rank: 3,
      color: "#017fb1",
    },
    {
      projectedProfit: 750000,
      AnswerRef: "four",
      Text: "Year 4",
      Score: 0,
      RespondentPercentage: 16,
      Rank: 4,
      color: "#01678e",
    },
    {
      projectedProfit: 1000000,
      AnswerRef: "five",
      Text: "Year 5",
      Score: 0,
      RespondentPercentage: 23,
      Rank: 2,
      color: "#015677",
    },
    {
      projectedProfit: 500000,
      AnswerRef: "three",
      Text: "Year 3",
      Score: 1,
      RespondentPercentage: 41,
      Rank: 3,
      color: "#017fb1",
    },
    {
      projectedProfit: 500000,
      AnswerRef: "three",
      Text: "Year 3",
      Score: 1,
      RespondentPercentage: 41,
      Rank: 3,
      color: "#017fb1",
    },
    {
      projectedProfit: 500000,
      AnswerRef: "three",
      Text: "Year 3",
      Score: 1,
      RespondentPercentage: 41,
      Rank: 3,
      color: "#017fb1",
    },
  ];
  return (
    <div className="App">
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, left: -1 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="projectedProfit" />
        {/* <YAxis dataKey="projectedProfit"/> */}
        <Tooltip />
        <Bar
          yAxisId="left"
          dataKey="projectedProfit"
          fill="#FF7C1C"
          onClick={(e) => console.log(e.payload.projectedProfit)}
        />
        {/* <Legend/> */}
        <Bar
          yAxisId="right"
          dataKey="RespondentPercentage"
          fill="#00B4FF"
          onClick={(e) => console.log(e.payload.RespondentPercentage)}
        />
        <Bar
          yAxisId="right"
          dataKey="Rank"
          fill="#FF5252"
          onClick={(e) => console.log(e.payload.Rank)}
        />
      </BarChart>

      <p>{process.env.REACT_APP_NAME}</p>
      {process.env.REACT_APP_URL}
    </div>
  );
}

export default App;
