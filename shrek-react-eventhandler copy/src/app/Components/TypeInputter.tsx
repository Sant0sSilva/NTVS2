const TypeInputter = () => {
  return (
    <div className="flex flex-col space-y-6 mt-6">
      <input
        placeholder="Shrek !!"
        type="text"
        className="min-w-50 max-w-50 rounded-md bg-white py-2 mx-10 indent-4 focus:outline-green-500 outline-2  outline-gray-300"
      />
      <p className="text-green-900 mx-10 text-xl">You typed:</p>
    </div>
  );
};

export default TypeInputter;
