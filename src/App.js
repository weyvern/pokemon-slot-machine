import { useState } from 'react';
import Slots from './components/Slots';
import './App.css';
import { Fragment } from 'react';

const App = () => {
  const pokemon = [
    {
      id: 1,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 2,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
      id: 3,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    },
    {
      id: 4,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 5,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
    },
    {
      id: 6,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
    },
    {
      id: 7,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    },
    {
      id: 8,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
    },
    {
      id: 9,
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
    }
  ];
  const [slotsNumber, setSlotsNumber] = useState(3);
  const handleSlotNumberChange = op => {
    if (op === '+') {
      setSlotsNumber(prev => prev + 1);
    } else if (op === '-') {
      slotsNumber === 3 ? alert('3 is the minimum value') : setSlotsNumber(prev => prev - 1);
    }
  };
  return (
    <Fragment>
      <div className='row'>
        <button className='btn' onClick={() => handleSlotNumberChange('-')}>
          -
        </button>
        <p>{slotsNumber}</p>
        <button className='btn' onClick={() => handleSlotNumberChange('+')}>
          +
        </button>
      </div>
      <Slots slotsNumber={slotsNumber} pokemon={pokemon} />
    </Fragment>
  );
};

export default App;
