import { useState, useEffect, ChangeEvent } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('a');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters); 
  }, [monsters, searchField]) 

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHanlder={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFieldState: ''
//     }
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {monsters: users};
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return {searchFieldState: searchField};
//     })
//   }

//   render() {
//     // console.log('render AppJS');

//     // реструктуризация для удобства
//     const {monsters, searchFieldState} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchFieldState);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHanlder={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}/>        
//       </div>
//     );
//   }
// }

export default App;
