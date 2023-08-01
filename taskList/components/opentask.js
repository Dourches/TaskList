
export default function OpenTask({ dispatch, lists, child }) {

    function changeDescription(newDescription) {
        dispatch({
            type: 'changedDescription',
            key: child.key,
            description: newDescription,
          });
    }

    function changeTitle(newTitle) {
        dispatch({
            type: 'changedTitle',
            key: child.key,
            title: newTitle,
          });
    }

    return (
        <div>
            <input value={child.title} onChange={e => changeTitle(e.target.value)} />
            <input value={child.description} onChange={e => changeDescription(e.target.value)} />
        </div>
    );
}