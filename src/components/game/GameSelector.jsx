import { useRouter } from "next/navigation";
import games from "@/data/games";
import { SiSymbolab } from "react-icons/si";
import { TbAbc } from "react-icons/tb";
import { GoNumber } from "react-icons/go";

const gameIcons = {
  guessName: <TbAbc className="text-3xl text-blue-500" />,
  guessNumber: <GoNumber className="text-3xl text-green-500" />,
  guessSymbol: <SiSymbolab className="text-3xl text-red-500" />,
};

export default function GameSelector() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-300">
        Test your knowledge
      </h2>
      <div className="flex gap-4 items-center">
        {games.map((game) => (
          <button
            key={game.key}
            onClick={() => router.push(game.path)}
            className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            aria-label={`Go to ${game.label}`}
          >
            <span className="mb-2">{gameIcons[game.key]}</span>
            <span className="text-sm">{game.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
