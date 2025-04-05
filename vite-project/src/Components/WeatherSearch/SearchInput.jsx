import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather, clearWeather } from "../../Reducers/weatherSearchSlice";

function SearchInput() {


  const dispatch = useDispatch();
  const [query, setQuery] = useState("");


  const handleInputChange = (e) => {

    setQuery(e.target.value);
  };



  // Having this makes it always load Stockholm when going back to HomePage. 
    useEffect(() => {
        dispatch(fetchWeather("London"));
      }, [dispatch]);





  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearWeather()); // Clear previous weather data
    // Dispatch the fetchWeather thunk with the user's search query.
    dispatch(fetchWeather(query));
  };



    return (
      <>

    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter a location"
        className="border p-2 mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Search
      </button>
    </form>

      </>
    );
  }

  export default SearchInput
