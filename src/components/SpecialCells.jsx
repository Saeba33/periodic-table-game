export const ColumnHeaders = () => (
  <>
    {Array.from({ length: 18 }, (_, index) => (
      <div
        key={index}
        className="flex items-center justify-center w-full shadow-md rounded-lg text-xs md:text-sm lg:text-base xl:text-lg text-gray-400 border border-gray-700"
        style={{
          gridColumn: index + 2,
          gridRow: 1,
        }}
      >
        {index + 1}
      </div>
    ))}
  </>
);

export const RowHeaders = () => (
  <>
    {Array.from({ length: 10 }, (_, rowIndex) => (
      <div
        key={rowIndex}
        className="flex items-center justify-center shadow-md rounded-lg text-xs md:text-sm lg:text-base xl:text-lg mr-[1px] p-1 text-gray-400 border border-gray-700"
        style={{
          gridRow: rowIndex + 2,
          gridColumn: 1,
          display: rowIndex + 2 > 8 ? "none" : "flex",
        }}
      >
        {rowIndex + 1}
      </div>
    ))}
  </>
);

export const SpecialCell = ({ column, row, content }) => (
  <div
    className="flex flex-col items-center justify-center shadow-md rounded-lg text-gray-400"
    style={{ gridColumn: column, gridRow: row }}
  >
    {content}
  </div>
);
