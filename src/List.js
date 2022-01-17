import getUserData from "./data";
import ListItem from "./ListItem";
import './List.css';

function List() {
  const users = getUserData();

  const listItems = users.map((user) =>
    <ListItem key={user.id} value={user} />
  )

  return (
    <ul id="list">
      {listItems}
    </ul>
  );
}

export default List;
