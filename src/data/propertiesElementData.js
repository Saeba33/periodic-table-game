const bgColors = {
  actinide: "#E6B0AA",
  "alkali metal": "#FFB3E6",
  "alkaline earth metal": "#F9E3B4",
  halogen: "#FFCC99",
  lanthanide: "#D9B3FF",
  metalloid: "#FF9999",
  "noble gas": "#E6E6E6",
  nonmetal: "#B3E6CC",
  "post-transition metal": "#c2a2c2",
  "transition metal": "#B3D9FF",
};

const borderStyles = {
  primordial: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "white",
  },
  synthetic: {
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "white",
  },
  "from decay": {
    borderStyle: "dotted",
    borderWidth: "2px",
    borderColor: "white",
  },
};

const textColors = {
  gas: { color: "#4338CA" },
  liquid: { color: "#047857" },
  solid: { color: "#000000" },
};

export { bgColors, borderStyles, textColors };
