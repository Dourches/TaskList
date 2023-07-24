
export default function OpenTask({ setList, lists, child }) {

    function addAfter(array, index, newItem) {
        return [
            ...array.slice(0, index),
            newItem,
            ...array.slice(index)
        ];
    }

    function changeDescription(newDescription) {
        const item = lists.find(a => a.key == child.key)
        const itemIndex = lists.findIndex(a => a.key == child.key)
        const nextLists = lists.filter(a => a.key !== child.key);
        item.description = newDescription
        setList(addAfter(nextLists, itemIndex, item))
    }

    function changeTitle(newTitle) {
        const item = lists.find(a => a.key == child.key)
        const itemIndex = lists.findIndex(a => a.key == child.key)
        const nextLists = lists.filter(a => a.key !== child.key);   
        item.title = newTitle
        setList(addAfter(nextLists, itemIndex, item))
    }

    return (
        <div>
            <input value={child.title} onChange={e => changeTitle(e.target.value)} />
            <input value={child.description} onChange={e => changeDescription(e.target.value)} />
        </div>
    );
}