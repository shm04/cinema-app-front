import React, { useEffect, useState } from "react";

const SeatsSelector = ({ cinemaId, roomId }) => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState('');

  useEffect(() => {
    const fetchRows = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cinemas/${cinemaId}/rooms/${roomId}/seats`);
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching rows:', error);
      }
    };

    fetchRows();
  }, [cinemaId, roomId]);

  return (
    <table>
      <tbody>
        <tr>
          <td>Row - Seat</td>
          <td>
            <select
              onChange={(e) => setSelectedRow(e.target.value)}
              value={selectedRow}
            >
              <option value="" disabled>
                Select a row
              </option>
              {rows.map((row) => (
                <option key={row.id} value={row.id}>
                  {`${row.row} - ${row.number}`}
                </option>
              ))}
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SeatsSelector;