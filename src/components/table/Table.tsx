import React from "react";
import "./Table.scss";

const Table = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Person</th>
          <th>Money</th>
          <th>Money</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test User 1</td>
          <td>100</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Test User 2</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr className="active-row">
          <td>Test User 3</td>
          <td>50</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  );
};

interface Props {
  title: string;
}

export default Table;
