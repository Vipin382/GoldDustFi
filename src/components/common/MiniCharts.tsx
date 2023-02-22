import { AreaChart, Area, Tooltip } from "recharts";

const data = [
  {
    label: "Page A",
    uv: 1000,
  },
  {
    label: "Page B",
    uv: 1500,
  },
  {
    label: "Page C",
    uv: 1800,
  },
  {
    label: "Page D",
    uv: 9780,
  },
  {
    label: "Page E",
    uv: 7890,
  },
  {
    label: "Page F",
    uv: 6390,
  },
  {
    label: "Page G",
    uv: 8490,
  },
  {
    label: "Page A",
    uv: 1000,
  },
  {
    label: "Page B",
    uv: 1500,
  },
  {
    label: "Page C",
    uv: 1800,
  },
  {
    label: "Page D",
    uv: 9780,
  },
  {
    label: "Page E",
    uv: 7890,
  },
  {
    label: "Page F",
    uv: 6390,
  },
  {
    label: "Page G",
    uv: 8490,
  },

  {
    label: "Page A",
    uv: 1000,
  },
  {
    label: "Page B",
    uv: 1500,
  },
  {
    label: "Page C",
    uv: 1800,
  },
  {
    label: "Page D",
    uv: 9780,
  },
  {
    label: "Page E",
    uv: 7890,
  },
  {
    label: "Page F",
    uv: 6390,
  },
  {
    label: "Page G",
    uv: 8490,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-auto h-auto rounded-sm text-[10px] bg-slate-800 text-white bg-opacity-70 p-2">
        <p className="label">{`${data[label].label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const MiniCharts = () => {
  return (
    <AreaChart
      width={100}
      height={50}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#10AE98" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#10AE98" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip content={<CustomTooltip />} wrapperClassName="border-none" />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#10AE98"
        fill="url(#colorPv)"
        className="cursor-pointer"
      />
    </AreaChart>
  );
};

export default MiniCharts;
