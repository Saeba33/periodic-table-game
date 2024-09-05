"use client";

import { useEffect, useState } from "react";
import GameCard from "@/components/game/GameCard";
import GameHeader from "@/components/game/GameHeader";
import useGameLogic from "@/hooks/useGameLogic";
import { useRouter } from "next/navigation";
import { getGameConfig } from "@/data/games";
import Confetti from "react-confetti";

export default function GameComponent({ gameType }) {
  const router = useRouter();
  const game = getGameConfig(gameType);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const {
    currentGuess,
    feedback,
    correctCount,
    totalAttempts,
    selectedElement,
    shuffledElements,
    handleInputChange,
    handleSubmit,
    handleCardClick,
  } = useGameLogic(game.checkAnswer);

  const gameCards = shuffledElements.map((element) => (
    <GameCard
      key={element.number}
      element={element}
      feedback={feedback}
      currentGuess={currentGuess}
      selectedElement={selectedElement}
      onCardClick={handleCardClick}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      renderContent={game.renderContent}
      gameType={game.key}
    />
  ));

  useEffect(() => {
    if (correctCount === shuffledElements.length) {
      setShowAnimation(true);
      setShowPopup(true);
    }
  }, [correctCount, shuffledElements.length]);

  const navigateHome = () => {
    router.push("/");
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowAnimation(false);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen relative">
      {showAnimation && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white m-4 p-8 rounded-lg shadow-lg text-black text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations !</h2>
            <p className="mb-6">
              You&apos;ve successfully found all the elements! Your periodic table
              skills are off the charts ! It&apos;s time for a victory dance 🕺
            </p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <GameHeader
        gameType={game.key}
        title={game.title}
        instructions={game.instructions}
        totalAttempts={totalAttempts}
        correctCount={correctCount}
        onBackClick={navigateHome}
      />
      <div className="flex flex-wrap gap-4 justify-center">{gameCards}</div>
    </div>
  );
}
