import './ListItem.css';

function ListItem(props) {
  return (
    <li>
      <p>{props.value.name}</p>
      <a href={`mailto:` + `${props.value.email}`}>{props.value.email}</a>
      <a href={`tel:` + `${props.value.phone}`}>{props.value.phone}</a>
    </li>
  );
}

export default ListItem;
