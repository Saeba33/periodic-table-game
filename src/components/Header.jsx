export default function Header() {
  return (
    <div className="flex flex-col items-center gap-6 xl:items-start">
        <h1 className="text-4xl font-bold hover:text-[#61DAFB]">
          Periodic Table of Elements
        </h1>
      <p className="text-gray-400">
        The periodic table organizes all known chemical elements by their atomic
        properties, such as atomic number and chemical behavior. It’s a key tool
        in understanding the building blocks of matter. Choose a game to test
        your knowledge of the elements and their place in the table in a fun and
        interactive way!
      </p>
    </div>
  );
}
