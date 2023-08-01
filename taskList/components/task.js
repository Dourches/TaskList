import OpenTask from "./opentask"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useReducer } from 'react'

export default function Task({ child, lists, dispatch }) {

    function HandleDelete() {
        dispatch({
            type: 'deleted',
            key: child.key,
          });
        //const nextLists = lists.filter(a => a.key !== child.key);
        //setLists(nextLists);    
    }

    function HandleChange() {
        dispatch({
            type: 'changed',
            key: text,
          });
    }

    return (
        <div className="task">
            <Popup trigger={<div className="menu-item">{child.title}</div>} position="right center">
                <OpenTask lists={lists} child={child} dispatch={dispatch} />
            </Popup>
            <button onClick={HandleDelete}>Delete</button>
            </div>
    );
}