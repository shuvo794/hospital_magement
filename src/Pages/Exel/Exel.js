import "./style.css";
import React, { useState } from "react";

import { ExcelRenderer } from "react-excel-renderer";

function Exel() {
  const [header, set_header] = useState([]);
  const [rows, set_rows] = useState([]);
  function exelToData(e) {
    const file = e.target.files[0];
    ExcelRenderer(file, (err, res) => {
      if (err) alert(JSON.stringify(err));
      else {
        set_header(res.rows[0]);
        res.rows.splice(0, 1);
        set_rows(res.rows);
        // console.log(res.rows);
      }
    });
  }
  return (
    <div id="excel">
      {!header?.length ? (
        <form>
          <input onChange={exelToData} type="file" />
        </form>
      ) : (
        <>
          <h2>Excel Data</h2>
          <table>
            <thead>
              <tr>
                {header.map((data) => (
                  <th key={data}>{data}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                return (
                  <tr key={row[0]}>
                    {row.map((r) => {
                      return <td key={r}>{r}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Exel;
