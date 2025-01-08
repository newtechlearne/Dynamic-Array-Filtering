import React, { useState } from 'react';

const DynamicFilter = () => {
  // Sample data: List of items with names and categories
  const [items] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Orange', category: 'Fruit' },
    { id: 4, name: 'Potato', category: 'Vegetable' },
  ]);

  // State to keep track of which categories are selected for filtering
  const [filterState, setFilterState] = useState({
    Fruit: true, // Initially show fruits
    Vegetable: true, // Initially show vegetables
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (category) => {
    setFilterState((prevState) => {
      // Update the filter state for the clicked category
      return {
        ...prevState, // Keep the current settings
        [category]: !prevState[category], // Toggle the selected category
      };
    });
  };

  // Filter the items based on the selected categories
  const filteredItems = items.filter((item) => {
    // Only include items that belong to a selected category
    return filterState[item.category];
  });

  return (
    <div>
      <h1>Dynamic Array Filtering</h1>

      {/* Section for filter checkboxes */}
      <div>
        {/* Create a checkbox for each category */}
        {Object.keys(filterState).map((category) => (
          <label key={category} style={{ display: 'block', margin: '5px 0' }}>
            <input
              type="checkbox"
              checked={filterState[category]} // Checkbox reflects the filter state
              onChange={() => handleCheckboxChange(category)} // Handle checkbox changes
            />
            {category} {/* Display the category name (e.g., Fruit, Vegetable) */}
          </
