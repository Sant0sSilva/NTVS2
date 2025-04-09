const shrekQuotes = [
  "Ogres are like onions... they have layers!",
  "What are you doing in my swamp?",
  "I'm like a crackin' onion!",
  "Better out than in, I always say!",
  "Donkey, I'm warning you!",
  "This is the part where you run away.",
];

const QuoteGenerator = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="overflow-auto px-4">
        <p className="text-center text-2xl italic text-green-900 font-semibold">
          {`"${shrekQuotes[5]}"`}
        </p>
      </div>
      <div className="flex flex-col space-y-6 items-center">
        <input
          placeholder="Donkey?"
          type="text"
          className="min-w-50 max-w-50 rounded-md bg-white py-2 mx-10 indent-4 focus:outline-green-500 outline-2  outline-gray-300"
        />
        <button
          className="bg-green-600 py-4 px-6 mx-10 rounded-md text-white text-xl font-semibold"
          onFocus={}
          onMouseOver={}
        >
          Click Me For a Shrek Quote!
        </button>
      </div>
    </div>
  );
};
export default QuoteGenerator;
