import './TableRow.css';

function TableRow(props) {
  return (
    <tr>
      <th>{props.value.name}</th>
      <td>
        <a href={`mailto:` + `${props.value.email}`}>{props.value.email}</a>
      </td>
      <td>
        <a href={`tel:` + `${props.value.phone}`}>{props.value.phone}</a>
      </td>
    </tr>
  );
}

export default TableRow;
