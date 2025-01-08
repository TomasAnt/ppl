import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import { GraphContainer, ChartTitle } from "./graph.styled";

type ChartData = {
  time: string;
  price: number;
};

const Graph = ({ data }: { data: ChartData[] }) => {
  return (
    <GraphContainer>
      <ChartTitle>Price Trend</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 20, left: 10 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
          <XAxis dataKey="time" tick={{ fontSize: 12, fill: "#666" }} />
          <YAxis tick={{ fontSize: 12, fill: "#666" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            labelStyle={{ fontSize: 14, color: "#333" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4a90e2"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default Graph;
