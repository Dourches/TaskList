import OpenTask from "./opentask"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Task({ child, setLists, lists }) {
    
    function HandleDelete() {
        const nextLists = lists.filter(a => a.key !== child.key);
        setLists(nextLists);
    }

    return (
        <div className="task">
            <Popup trigger={<div className="menu-item">{child.title}</div>} position="right center">
                <OpenTask setList={setLists} lists={lists} child={child} />
            </Popup>
            <button onClick={HandleDelete}>Delete</button>
            </div>
    );
}