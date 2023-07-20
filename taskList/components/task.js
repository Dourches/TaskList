export default function Task({ child, setLists, lists }) {
    
    function HandleDelete() {
        const nextLists = lists.filter(a => a.id !== child.id);
        setLists(nextLists);
    }

    return (
        <div>
            <div key={child.id}>{child.name}</div>
            <button onClick={HandleDelete}>Delete</button>
            </div>
    );
}