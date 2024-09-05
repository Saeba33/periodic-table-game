"use client";

import Header from "@/components/Header";
import PeriodicTable from "@/components/PeriodicTable";
import Filters from "@/components/Filters";
import useFilters from "@/hooks/useFilters";
import GameSelector from "@/components/game/GameSelector";

export default function Home() {
  const { selectedOptions, handleOptionChange, handleSearch, filteredElements, totalElements, searchTerm } = useFilters();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="bg-gray-900 text-white flex flex-col">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 p-4">
          <div className="bg-gray-800 rounded-lg p-6 xl:col-span-3">
            <Header />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 xl:col-span-2">
            <GameSelector />
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-4 px-4">
          <div className="bg-gray-800 rounded-lg w-full 2xl:w-1/4">
            <Filters
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange}
              resultsCount={filteredElements.length}
              totalElements={totalElements}
              searchTerm={searchTerm}
              onSearchChange={handleSearch}
            />
          </div>
          <div className="bg-gray-800 rounded-lg flex-grow overflow-x-auto">
            <PeriodicTable
              filteredElements={filteredElements}
              searchTerm={searchTerm}
              onSearchChange={handleSearch}
              selectedOptions={selectedOptions}
            />
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center text-xs text-gray-400 p-6">
        Made with ♥️ by Saeba12
      </footer>
    </div>
  );
}