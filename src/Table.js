import getUserData from "./data";
import TableRow from "./TableRow";
import './Table.css';

function Table() {
  const users = getUserData();

  const tableRow = users.map((user) =>
    <TableRow key={user.id} value={user} />
  )

  return (
    <table id="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {tableRow}
      </tbody>
    </table>
  );
}

export default Table;
