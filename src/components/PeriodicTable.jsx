import { useState, useMemo } from "react";
import {
  ColumnHeaders,
  RowHeaders,
  SpecialCell,
} from "@/components/SpecialCells";
import {
  bgColors,
  borderStyles,
  textColors,
} from "@/data/propertiesElementData";

const LANTHANIDE_RANGE = { start: 57, end: 71 };
const ACTINIDE_RANGE = { start: 89, end: 103 };

export default function PeriodicTable({ filteredElements }) {
  const [selectedElement, setSelectedElement] = useState(null);

  const { hasLanthanides, hasActinides } = useMemo(
    () => ({
      hasLanthanides: filteredElements.some(
        (element) =>
          element.number >= LANTHANIDE_RANGE.start &&
          element.number <= LANTHANIDE_RANGE.end
      ),
      hasActinides: filteredElements.some(
        (element) =>
          element.number >= ACTINIDE_RANGE.start &&
          element.number <= ACTINIDE_RANGE.end
      ),
    }),
    [filteredElements]
  );

  const renderElement = (element) => {
    const bgColor = bgColors[element.class] || bgColors.default;
    const borderStyle = borderStyles[element.origin] || borderStyles.default;
    const textColor = textColors[element.state] || textColors.default;
    const mass = element.mass.includes("[")
      ? element.mass
      : parseFloat(element.mass).toFixed(3);

    return (
      <div
        key={element.number}
        className="flex flex-col items-center justify-center rounded-sm overflow-hidden cursor-pointer transition-transform transform hover:brightness-110 3xl:p-1"
        style={{
          gridColumn: element.col + 1,
          gridRow: element.row + 1,
          backgroundColor: bgColor,
          ...borderStyle,
          ...textColor,
          minWidth: "25px",
          minHeight: 0,
        }}
        onClick={() => setSelectedElement(element)}
      >
        <div className="text-xs sm:text-sm lg:font-semibold font-medium text-center">
          {element.number}
        </div>
        <div className="text-xs sm:text-lg lg:font-extrabold font-bold text-center">
          {element.symbol}
        </div>
        <div className="text-xs hidden 3xl:block text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">
          {element.name}
        </div>
        <div className="text-xs hidden 3xl:block text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">
          {mass}
        </div>
      </div>
    );
  };

  const renderElementDetails = () => {
    if (!selectedElement) return null;

    const details = [
      { label: "Atomic number", value: selectedElement.number },
      { label: "Chemical symbol", value: selectedElement.symbol },
      { label: "Atomic mass (*)", value: selectedElement.mass },
      { label: "Category", value: selectedElement.class },
      { label: "Origin", value: selectedElement.origin },
      { label: "Standard state", value: selectedElement.state },
    ];

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl max-w-sm w-full transform transition-transform duration-300 scale-100 hover:scale-105">
          <span
            className="absolute top-3 right-4 text-white text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
            onClick={() => setSelectedElement(null)}
          >
            &times;
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-6 tracking-wide">
            {selectedElement.name}
          </h2>
          <div className="text-white space-y-2">
            {details.map(({ label, value }) => (
              <p key={label} className="flex items-center">
                <strong className="mr-2 text-gray-400">{label}:</strong>
                <span className="text-gray-300">{value}</span>
              </p>
            ))}
          </div>
          <p className="text-xs mt-5 text-gray-400 italic">
            (*) relative atomic mass [or that of the most stable isotope]
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto scroll-container pb-6">
        {filteredElements.length > 0 ? (
          <div
            className="grid gap-1 min-w-max"
            style={{
              gridTemplateColumns: "auto repeat(18, 1fr)",
              gridTemplateRows: "auto repeat(10, 1fr)",
            }}
          >
            <ColumnHeaders />
            <RowHeaders />
            <div
              className=" hidden p-2 xl:flex xl:flex-col xl:items-center xl:justify-center xl:text-lg"
              style={{ gridColumn: "1 / span 1", gridRow: "1 / span 1" }}
            >
              <div className="text-xs text-gray-400 text-nowrap">
                Group →
              </div>
              <span className="text-xs text-gray-400 text-nowrap">
                Period ↓
              </span>
            </div>
            {hasLanthanides && (
              <>
                <SpecialCell
                  column={4}
                  row={7}
                  content={
                    <>
                      <span className="text-md text-[#D9B3FF]">*</span>
                      <span className="hidden 3xl:flex text-sm text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                        57 - 71
                      </span>
                    </>
                  }
                />
                <SpecialCell
                  column={4}
                  row={10}
                  content={
                    <>
                      <span className="text-md text-[#D9B3FF]">*</span>
                      <span className="hidden 3xl:flex text-xs text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                        Lanthanides
                      </span>
                    </>
                  }
                />
              </>
            )}
            {hasActinides && (
              <>
                <SpecialCell
                  column={4}
                  row={8}
                  content={
                    <>
                      <span className="text-md text-[#E6B0AA]">**</span>
                      <span className="hidden 3xl:flex text-sm text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                        89 - 103
                      </span>
                    </>
                  }
                />
                <SpecialCell
                  column={4}
                  row={11}
                  content={
                    <>
                      <span className="text-md text-[#E6B0AA]">**</span>
                      <span className="hidden 3xl:flex text-xs text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                        Actinides
                      </span>
                    </>
                  }
                />
              </>
            )}
            {filteredElements.map(renderElement)}
          </div>
        ) : (
          <div className="flex items-center justify-center text-2xl text-gray-500 mt-10 mb-4">
            <p>No results found based on your criteria</p>
          </div>
        )}
        {renderElementDetails()}
      </div>
    </div>
  );
}
