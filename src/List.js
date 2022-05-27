import * as React from 'react';

const App = () => {
  const [food, setFood] = React.useState('');

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };
  

  return (
    <div style={{display: "inline-block"}}>
      <Dropdown
        label=""
        options={[
          { label: 'N/A', value: '' },
          { label: 'Fruit', value: 'fruit' },
          { label: 'Vegetable', value: 'vegetable' },
          { label: 'Meat', value: 'meat' },
        ]}
        value={food}
        onChange={handleFoodChange}
      />

      {/* <p>We eat {food}!</p> */}
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default App;