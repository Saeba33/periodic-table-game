import { FaSearch } from "react-icons/fa";

export default function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full h-[48px] pl-10 border-2 border-gray-700 bg-gray-700 text-gray-200 text-sm font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#61DAFB] focus:border-transparent caret-[#61DAFB]"
        placeholder="Find by name, symbol, atomic number, or atomic mass"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      />
    </div>
  );
}
