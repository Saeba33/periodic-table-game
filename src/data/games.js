import elements from "@/data/elements.json";

const checkSymbolAnswer = (elementNumber, guess) => {
  const element = elements.find((e) => e.number === elementNumber);
  if (element) {
    const correctSymbol = element.symbol.toUpperCase();
    return { correct: guess.trim().toUpperCase() === correctSymbol };
  }
  return { correct: false };
};

const checkNameAnswer = (elementNumber, guess) => {
  const element = elements.find((e) => e.number === elementNumber);
  if (element) {
    const correctName = element.name.toLowerCase();
    return { correct: guess.trim().toLowerCase() === correctName };
  }
  return { correct: false };
};

const checkNumberAnswer = (elementNumber, guess) => {
  const element = elements.find((e) => e.number === elementNumber);
  if (element) {
    const correctNumber = element.number.toString();
    return { correct: guess.trim() === correctNumber };
  }
  return { correct: false };
};


const games = [
  {
    key: "guessSymbol",
    label: "Guess symbol",
    path: "/game/guess-symbol",
    title: "Guess the element's symbol",
    instructions: "Click on the card to enter the missing chemical symbol.",
    checkAnswer: checkSymbolAnswer,
    renderContent: (element, feedback) => (
      <>
        <div className="text-3xl font-bold">{element.number}</div>
        <div className="text-xl font-bold">
          {feedback[element.number] === "correct" ? element.symbol : "??"}
        </div>
        <div className="text-lg">{element.name}</div>
        <div className="text-xs">{element.mass}</div>
      </>
    ),
  },
  {
    key: "guessName",
    label: "Guess name",
    path: "/game/guess-name",
    title: "Guess the element's name",
    instructions: "Click on the card to enter the missing element's name.",
    checkAnswer: checkNameAnswer,
    renderContent: (element, feedback) => (
      <>
        <div className="text-3xl font-bold">{element.number}</div>
        <div className="text-xl font-bold">{element.symbol}</div>
        <div className="text-lg">
          {feedback[element.number] === "correct" ? element.name : "??"}
        </div>
        <div className="text-xs">{element.mass}</div>
      </>
    ),
  },
  {
    key: "guessNumber",
    label: "Guess number",
    path: "/game/guess-number",
    title: "Guess the element's atomic number",
    instructions: "Click on the card to enter the missing atomic number.",
    checkAnswer: checkNumberAnswer,
    renderContent: (element, feedback) => (
      <>
        <div className="text-3xl font-bold">
          {feedback[element.number] === "correct" ? element.number : "??"}
        </div>
        <div className="text-xl font-bold">{element.symbol}</div>
        <div className="text-lg">{element.name}</div>
        <div className="text-xs">{element.mass}</div>
      </>
    ),
  },
];

export const getGameConfig = (gameType) =>
  games.find((game) => game.key === gameType);

export default games;
