/**
 * SearchInput.jsx
 * 
 * A reusable search bar component for city-based weather lookups.
 * 
 * Props:
 * - `onSearch` (function): A callback triggered when the user submits a valid query.
 *   Typically used to dispatch a Redux thunk or update state in a parent component.
 * 
 * Component State:
 * - `query`: Stores the current user input in the text field.
 * 
 * Features:
 * - Controlled input field for live updates and form submission.
 * - Prevents empty or whitespace-only searches.
 * - Automatically clears input after a successful search.
 * 
 * Styling:
 * - Responsive layout using Tailwind CSS with spacing and button styling.
 * 
 * Usage:
 * Designed to be used in different parts of the app (e.g. homepage, search page),
 * with custom behavior controlled by the `onSearch` prop passed from the parent.
 */



import React, { useState } from "react";

// query updateras aldrig direkt utan updateras med setQuery funktionen.
//setQuery är en funktion som updaterar query. 

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
