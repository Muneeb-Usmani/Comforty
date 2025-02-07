import { useGlobalContext } from "@/app/context/GlobalContext";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useGlobalContext();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/product?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block p-3 ps-12 w-52 md:w-64 text-sm text-gray-900 rounded-lg bg-white"
          placeholder="e.g. chair"
        />
        <button
          type="submit"
          className="text-white absolute end-1 bottom-1.5 bg-[#029FAE] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-[0.39rem] hover:bg-cyan-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
