import { useState } from 'react';
import Task from './task'

let nextId = 3;
const initialLists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [name, setName] = useState('');
  const [lists, setLists] = useState(
    initialLists
  );

  function handleClick() {
      const nextLists = lists.concat({ id: nextId++, name: name });
      setLists(nextLists);
    setName('');
    }

  return (
    <>
      <h1>To do:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {lists.map(list => (
            <Task child={list} setLists={setLists} lists={lists} />
        ))}
      </ul>
    </>
  );
}
