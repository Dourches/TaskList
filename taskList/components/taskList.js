import { useState, useReducer } from 'react';
import Task from './task'

let nextId = 3;
const initialLists = [
  { key: 0, title: 'Work', description: 'On react' },
  { key: 1, title: 'Eat', description: 'Good stuff'},
  { key: 2, title: 'Rest', description: 'in peace'},
];

function addAfter(array, index, newItem) {
  return [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index)
  ];
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          key: action.key,
          title: action.title,
          description: '',
        },
      ];
    }
    case 'changedDescription': {
      const item = tasks.find(a => a.key == action.key)
        const itemIndex = tasks.findIndex(a => a.key == action.key)
        const nextLists = tasks.filter(a => a.key !== action.key);
        item.description = action.description
      
      return addAfter(nextLists, itemIndex, item)
    } 
    case 'changedTitle': {
      const item = tasks.find(a => a.key == action.key)
        const itemIndex = tasks.findIndex(a => a.key == action.key)
        const nextLists = tasks.filter(a => a.key !== action.key);
        item.title = action.title
      
      return addAfter(nextLists, itemIndex, item)
    }
    case 'deleted': {
      return tasks.filter((t) => t.key !== action.key);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function List() {
  const [title, setName] = useState('');
  const [tasks, dispatch] = useReducer(tasksReducer, initialLists);

  function handleClick() {
    if (title !== "") {
      dispatch({
        type: 'added',
        key: nextId++,
        title: title,
        description: '',
      });
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
        {tasks.map((list, index) => (
          <Task key={list.key} child={list} lists={tasks} dispatch={dispatch} />
        ))}
        </ul>
      </div>
  );
}
