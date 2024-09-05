import { useState, useMemo } from "react";
import elements from "../data/elements.json";

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const useGameLogic = (checkAnswer) => {
  const [currentGuess, setCurrentGuess] = useState({});
  const [feedback, setFeedback] = useState({});
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [selectedElement, setSelectedElement] = useState(null);
  const [correctElements, setCorrectElements] = useState(new Set());

  const handleInputChange = (e, elementNumber) => {
    setCurrentGuess((prev) => ({
      ...prev,
      [elementNumber]: e.target.value,
    }));
  };

  const handleSubmit = (e, elementNumber) => {
    e.stopPropagation();
    const result = checkAnswer(elementNumber, currentGuess[elementNumber]);
    if (result.correct) {
      setFeedback((prev) => ({ ...prev, [elementNumber]: "correct" }));
      setCorrectCount((prev) => prev + 1);
      setCorrectElements((prev) => new Set(prev).add(elementNumber));
    } else {
      setFeedback((prev) => ({ ...prev, [elementNumber]: "incorrect" }));
    }
    setTotalAttempts((prev) => prev + 1);
    setCurrentGuess((prev) => ({
      ...prev,
      [elementNumber]: "",
    }));
    setSelectedElement(null);
  };

  const handleCardClick = (elementNumber) => {
    if (!correctElements.has(elementNumber)) {
      setSelectedElement(
        elementNumber === selectedElement ? null : elementNumber
      );
    }
  };

  const shuffledElements = useMemo(() => shuffleArray(elements), []);

  return {
    currentGuess,
    feedback,
    correctCount,
    totalAttempts,
    selectedElement,
    shuffledElements,
    handleInputChange,
    handleSubmit,
    handleCardClick,
  };
};

export default useGameLogic;
