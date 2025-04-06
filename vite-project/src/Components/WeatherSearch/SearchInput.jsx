import React, {useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchCurrentLocationWeather, clearWeather, fetchSearchedWeather } from "../../Reducers/weatherSearchSlice";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    onSearch(query.trim()); // Trigger only the thunk passed via props
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a city..."
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
