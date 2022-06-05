import * as React from 'react';

const App = () => {
  const [food, setFood] = React.useState('');
  const [drink, setDrink] = React.useState('');

  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };
  

  return (
    <div style={{display: "inline-block"}}>
      <Dropdown
        label=""
        options={[

          { label: 'N/A', value: '' },
          { label: 'Water', value: 'water' },
          { label: 'Beer', value: 'beer' },
          { label: 'Wine', value: 'wine' },
        ]}
        value={drink}
        onChange={handleDrinkChange}
      />
      {/* <p>We drink {drink}!</p> */}
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