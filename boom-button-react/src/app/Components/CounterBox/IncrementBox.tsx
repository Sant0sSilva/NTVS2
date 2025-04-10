import Counter from "./Counter";

type IncrementBoxProps = {
  count: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  limit: number;
  showBoom: boolean;
};

const IncrementBox = ({
  count,
  onIncrementClick,
  onDecrementClick,
  limit,
  showBoom,
}: IncrementBoxProps) => {
  return (
    <div className="flex-col">
      <div>
        <Counter
          count={count}
          onIncrementClick={onIncrementClick}
          onDecrementClick={onDecrementClick}
          limit={limit}
        />
      </div>
      <div className="h-20">
        <div
          className={`text-9xl text-center bg-purple-500 text-white p-4 rounded-2xl ${
            showBoom ? "" : "hidden"
          } `}
        >
          !bOoMm!
        </div>
      </div>
    </div>
  );
};

export default IncrementBox;
