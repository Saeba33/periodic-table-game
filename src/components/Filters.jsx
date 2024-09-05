import { FaCheck } from "react-icons/fa";
import Search from "@/components/Search";
import {
  bgColors,
  borderStyles,
  textColors,
} from "@/data/propertiesElementData";
import elements from "@/data/elements.json";

export default function Filters({
  selectedOptions,
  onOptionChange,
  resultsCount,
  searchTerm,
  onSearchChange,
}) {

  const totalElements = elements.length;

  return (
      <div className="flex flex-wrap p-6 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">Category</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(bgColors).map(([key, color]) => (
              <div
                key={key}
                className="flex items-center space-x-2 cursor-pointer transition-transform transform hover:scale-105 flex-nowrap bg-gray-700 p-2 rounded-lg"
                onClick={() => onOptionChange("bgColors", key)}
                aria-label={`Select background color ${key}`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-600 bg-gray-600">
                  {selectedOptions.bgColors.includes(key) && (
                    <FaCheck className="text-[#61DAFB]" />
                  )}
                </div>
                <span
                  className="text-sm font-medium whitespace-nowrap overflow-hidden rounded-full px-2 py-1 text-gray-900 text-ellipsis"
                  style={{ backgroundColor: color }}
                >
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">Origin</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(borderStyles).map((key) => (
              <div
                key={key}
                className="flex items-center space-x-2 cursor-pointer transition-transform transform hover:scale-105 flex-nowrap bg-gray-700 p-2 rounded-lg"
                onClick={() => onOptionChange("borderStyles", key)}
                aria-label={`Select border style ${key}`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    borderStyle: borderStyles[key].borderStyle,
                    borderWidth: borderStyles[key].borderWidth,
                    borderColor: borderStyles[key].borderColor,
                  }}
                >
                  {selectedOptions.borderStyles.includes(key) && (
                    <FaCheck className="text-[#61DAFB]" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">State</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(textColors).map(([key, style]) => (
              <div
                key={key}
                className="flex items-center space-x-2 cursor-pointer transition-transform transform hover:scale-105 flex-nowrap bg-gray-700 p-2 rounded-lg"
                onClick={() => onOptionChange("textColors", key)}
                aria-label={`Select text color ${key}`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-gray-600 bg-gray-600">
                  {selectedOptions.textColors.includes(key) && (
                    <FaCheck className="text-[#61DAFB]" />
                  )}
                </div>
                <span
                  className="text-sm font-medium whitespace-nowrap overflow-hidden rounded-full px-2 py-1 text-gray-200 text-ellipsis"
                  style={{ backgroundColor: style.color }}
                >
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-300 mb-2">Search</h3>
          <div className="w-full">
            <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
          </div>
        </div>

      <div className="w-full text-xs pl-2 text-gray-400 self-start">
        Number of results: {resultsCount} / {totalElements}
      </div>
    </div>
  );
}
