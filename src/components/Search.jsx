// Search.js
import React, { useState } from 'react';
import axios from 'axios';
import MealItem from './MealItem';

function Search() {

  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const searchMeal = async () => {
    
    if (!searchTerm.trim()) {
      alert('Enter a food name to search');
      return;
    }

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
        
      if (response.data.meals) {
        setMeals(response.data.meals);
        setError('');
      } else {
        setMeals([]);
        alert('No food found for searchedItem : '+searchTerm);
      }
    } catch (error) {
      console.error('Error searching for food:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a food name"
        value={searchTerm}
        style={{width:'200px',marginLeft:'500px',position:'relative'}}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {" "}
      <button className="search-button"onClick={searchMeal}>Search</button>
      <br/><br/>
      {error && <div className="alert">{error}</div>}
      <div className="meal-list">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
        {" "}
      </div>
    </div>
  );
}

export default Search;
