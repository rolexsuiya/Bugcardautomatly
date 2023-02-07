import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  Legend,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RenderLineChart = (props) => {
  const { data = [] } = props;

  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    return <span style={{ color:"black", margin:5}}>{value}</span>
  }

  return (
    <>
      <ResponsiveContainer >
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false}/>
          <YAxis axisLine={false}/>
          <Tooltip activeDot={false} />
          <Legend iconType="circle" iconSize={10}  formatter={renderColorfulLegendText}/>

          <Line type="linear" dataKey="Bugs" stroke="#36A2EB" />
          <Line type="linear" dataKey="CodeSmells" stroke="#FF9F40" />
          <Line type="linear" dataKey="Vulnerabilities" stroke="#FF6384" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
