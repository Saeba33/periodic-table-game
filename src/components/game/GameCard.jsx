import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function GameCard({ currentGuess, element, feedback, renderContent, selectedElement, onCardClick, onInputChange, onSubmit}) {

  const [isCardSelected, setIsCardSelected] = useState(false);

  const handleCardClick = () => {
    setIsCardSelected((prev) => !prev);
    onCardClick(element.number);
  };

  const handleInputFocus = () => {
    setIsCardSelected(true);
  };

  const handleInputBlur = () => {
    setIsCardSelected(false);
  };


  useEffect(() => {
    if (selectedElement !== element.number) {
      setIsCardSelected(false);
    }
  }, [selectedElement, element.number]);



  return (
    <div
      className={`flex flex-col items-center p-4 text-center border rounded-lg transition-transform duration-300
                  ${
                    feedback[element.number] === "correct"
                      ? "border-green-500 bg-gray-800 opacity-50 cursor-default"
                      : feedback[element.number] === "incorrect"
                      ? "border-red-500 cursor-pointer hover:scale-105 hover:bg-gray-700"
                      : "border-gray-300 cursor-pointer hover:scale-105 hover:bg-gray-700"
                  }
                  overflow-hidden`}
      onClick={handleCardClick}
      style={{ width: "100%", maxWidth: "200px", height: "auto", maxHeight: "280px"}}
    >
      <div className="flex-grow flex flex-col justify-center items-center gap-2">
        {renderContent(element, feedback)}
      </div>
      {selectedElement === element.number && (
        <div className="flex flex-col items-center justify-between w-full mt-4 gap-2">
          <input
            type="text"
            value={currentGuess[element.number] || ""}
            onChange={(e) => onInputChange(e, element.number)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="border p-2 rounded w-full text-black mb-2 box-border focus:outline-none focus:ring-2 focus:ring-[#61DAFB]"
            placeholder="Enter your guess"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => onSubmit(e, element.number)}
            className="p-2 bg-gray-800 hover:scale-105 text-white rounded"
          >
            Check
          </button>
        </div>
      )}
      {feedback[element.number] === "incorrect" && !isCardSelected && (
        <div className="mt-2 flex items-center justify-center text-red-500 text-lg">
          <AiOutlineCloseCircle className="mr-1" />
          <span>Try again!</span>
        </div>
      )}
      {feedback[element.number] === "correct" && (
        <div className="mt-2 flex items-center justify-center text-green-500 text-lg">
          <AiOutlineCheckCircle className="mr-1" />
          <span>Correct!</span>
        </div>
      )}
    </div>
  );
}
