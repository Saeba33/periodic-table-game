import { useState, useMemo } from "react";
import elements from "@/data/elements.json";
import { bgColors, borderStyles, textColors } from "@/data/propertiesElementData";

const useFilters = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    bgColors: Object.keys(bgColors).filter((key) => key !== "default"),
    borderStyles: Object.keys(borderStyles).filter((key) => key !== "default"),
    textColors: Object.keys(textColors).filter((key) => key !== "default"),
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleOptionChange = (type, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [type]: prevOptions[type].includes(value)
        ? prevOptions[type].filter((item) => item !== value)
        : [...prevOptions[type], value],
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredElements = useMemo(() => {
    return elements
      .filter(
        (element) =>
          selectedOptions.bgColors.includes(element.class) &&
          selectedOptions.borderStyles.includes(element.origin) &&
          selectedOptions.textColors.includes(element.state)
      )
      .filter(
        (element) =>
          element.name.toLowerCase().includes(searchTerm) ||
          element.symbol.toLowerCase().includes(searchTerm) ||
          element.number.toString().includes(searchTerm) ||
          element.mass.toString().includes(searchTerm)
      );
  }, [selectedOptions, searchTerm]);

  return {
    selectedOptions,
    handleOptionChange,
    handleSearch,
    filteredElements,
    totalElements: elements.length,
    searchTerm,
  };
};

export default useFilters;
