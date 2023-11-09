import React from 'react';

const CourseTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          {data[2].map((header, index) => (
            <th key={index}>{header[0]}</th>
          ))}
        </thead>
        <tbody>
          {data.slice(3).map((row, rowIndex) => (
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
