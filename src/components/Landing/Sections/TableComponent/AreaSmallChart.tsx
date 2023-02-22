import { AreaChart, Tooltip, Area } from "recharts";

interface AreaChartInterface {
  chartData: [];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-auto h-auto rounded-sm text-[10px] bg-slate-800 text-white bg-opacity-70 p-2">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const AreaSmallChart: React.FC<AreaChartInterface> = ({ chartData }) => {
  return (
    <div className="flex items-center justify-center">
      <AreaChart
        width={150}
        height={60}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10AE98" stopOpacity={0.4} />
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
    </div>
  );
};

export default AreaSmallChart;
