import CustomInputs from "./CustomInputs";
import ResetButton from "./ResetButton";

type ControlPanelProps = {
  setLimit: (newLimit: number) => void;
  setIncrement: (newIncrement: number) => void;
  setCount: (newIncrement: number) => void;
  limit: number;
  increment: number;
};

const ControlPanel = ({
  limit,
  increment,
  setLimit,
  setIncrement,
  setCount,
}: ControlPanelProps) => {
  return (
    <div>
      <div className="flex flex-col m-10 shadow-2xl shadow-black rounded-2xl bg-yellow-100 justify-center items-center">
        <div className="">
          <div className="flex justify-center m-4 border-1 rounded-2xl bg-gray-100 px-4">
            <p>
              Current limit: <span id="currentLimit">{limit}</span>, increment:
              <span id="currentIncrement">{increment}</span>
            </p>
          </div>
        </div>
        <div>
          <CustomInputs setIncrement={setIncrement} setLimit={setLimit} />
          <ResetButton
            setCount={setCount}
            setIncrement={setIncrement}
            setLimit={setLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
