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
 *
 * ARIA attributes for better accessibility.
 */

import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  // query holds current value, setQuery is the function to update query, useState("") initializes query to empty string.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
      role="search"
      aria-label="Search for a city's weather"
    >
      <label htmlFor="weather-search" className="sr-only">
        Enter a city name
      </label>
      <input
        id="weather-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a city..."
        className="border p-2 rounded w-full"
        aria-required="true"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded dark:bg-gray-800 dark:text-orange-300"
        aria-label="Search for weather"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
