import { useState } from 'react';
import Task from './task'

let nextId = 3;
const initialLists = [
  { key: 0, title: 'Work', description: 'On react' },
  { key: 1, title: 'Eat', description: 'Good stuff'},
  { key: 2, title: 'Rest', description: 'in peace'},
];

const type = "Task"; 

export default function List() {
  const [title, setName] = useState('');
  const [lists, setLists] = useState(
    initialLists
  );

  function handleClick() {
    if (title !== "") {
      const nextLists = lists.concat({ key: nextId++, title: title, description: '' });
      setLists(nextLists);
      setName('');
    }
  }
  
  return (
    <div>
      <h1>To do:</h1>
      <input
        value={title}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {lists.map((list, index) => (
          <Task key={list.key} child={list} setLists={setLists} lists={lists} />
        ))}
        </ul>
      </div>
  );
}
