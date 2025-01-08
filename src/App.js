import React, { useState } from 'react';

const DynamicFilter = () => {
  // Sample data: List of items with their categories
  const [items] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Orange', category: 'Fruit' },
    { id: 4, name: 'Potato', category: 'Vegetable' },
  ]);

  // State to track which categories are selected for filtering
  const [filterState, setFilterState] = useState({
    Fruit: true, // Show fruits by default
    Vegetable: true, // Show vegetables by default
  });

  // Function to update filter state when a checkbox is clicked
  const updateFilter = (category) => {
    setFilterState((currentFilters) => {
      return {
        ...currentFilters, // Keep the current filter settings
        [category]: !currentFilters[category], // Toggle the clicked category
      };
    });
  };

  // Get only the items that match the selected categories
  const filteredItems = items.filter((item) => filterState[item.category]);

  return (
    <div>
      <h1>Dynamic Array Filtering</h1>

      {/* Render checkboxes for each category */}
      <div>
        {Object.keys(filterState).map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={filterState[category]} // Checkbox state is linked to the filterState
              onChange={() => updateFilter(category)} // Update the filter when checkbox is clicked
            />
            {category} {/* Display the category name */}
          </label>
        ))}
      </div>

      {/* Render the filtered items as a list */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - <strong>{item.category}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicFilter;
