import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import characters from './data.js';
import {  Route, Routes, useLocation } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const { pathname } = useLocation();
  const example ={
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 };

let [char, setCharacters] = useState([]);

const onSearch = ()=>{
    setCharacters([...char, example]);
}

   return (
      <div className='App'>
        <Navbar onSearch={onSearch}/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/details' element={<Detail/>}/>
          <Route path='/home' element={<Cards characters={characters}/>}/>
        </Routes>
      </div>
   );
}

export default App;