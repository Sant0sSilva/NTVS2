"use client";

type StatsProps = {
  sum: number;
  count: number;
};

const Stats = ({ sum, count }: StatsProps) => {
  return (
    <div className="flex flex-col mt-4">
      <h1 className="text-5xl text-teal-400">Stats</h1>
      <div className="m-5">
        <p>Sum: {sum}</p>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default Stats;
