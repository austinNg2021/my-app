import logo from './logo.svg';
import './App.css';
import Teams from './teams.json';
import Test from './test.json'
import Dropdown from './List.js'
import Dropdown2 from './List2.js';
import { Component } from 'react/cjs/react.production.min';

function App() {
  console.log("Teams");
  return (
    
    <div>
      <Dropdown />
      <Dropdown2 />
    </div>
  );
}
console.log(Teams);
export default App;
