import { useState } from 'react';
import { useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState( '');
  const [monsters,setMonsters] = useState([]);

  useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    },[]
  );

  const  onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className='app-title'>Little Monsters List</h1>
      <SearchBox onChangeHandler={ onSearchChange }/>

      <CardList monsters={ filteredMonsters } />
    </div>
    
  );
}

export default App;
