import React from 'react';

const CourseTable = ({ data }) => {
  const headers = data[2];
  const tableData = data.slice(3);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} colSpan={header[1]} rowSpan={header[2]}>
                {header[0]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tableData[0].map((cell, index) => (
              <td key={index} colSpan={cell[1]} rowSpan={cell[2]}>
                {cell[0]}
              </td>
            ))}
          </tr>
          <tr>
            {tableData[1].map((cell, index) => (
              <td key={index} colSpan={cell[1]} rowSpan={cell[2]}>
                {cell[0]}
              </td>
            ))}
          </tr>
          <tr>
            {tableData[2].map((cell, index) => (
              <td key={index} colSpan={cell[1]} rowSpan={cell[2]}>
                {cell[0]}
              </td>
            ))}
          </tr>
          <tr>
            {tableData[3].map((cell, index) => (
              <td key={index} colSpan={cell[1]} rowSpan={cell[2]}>
                {cell[0]}
              </td>
            ))}
          </tr>
          {tableData.slice(4).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell[0]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
