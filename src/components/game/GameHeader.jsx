import { IoArrowBackCircle } from "react-icons/io5";

export default function GameHeader({
  correctCount,
  instructions,
  title,
  totalAttempts,
  onBackClick,
}) {
  return (
    <div className="p-6 flex flex-col items-center justify-center mb-12 px-4">
      <div className="flex-grow">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-lg mb-4">{instructions}</p>
          <button
            onClick={onBackClick}
            className="flex items-center justify-center gap-2 p-3 bg-gray-800 rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none"
          >
            <IoArrowBackCircle className="w-10 h-10 text-[#61DAFB]" />{" "}
            <span className="text-white text-lg">Back Home</span>
          </button>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p>Total Attempts: {totalAttempts}</p>
          <p>Correct Answers: {correctCount} / 118</p>
        </div>
      </div>
    </div>
  );
}
