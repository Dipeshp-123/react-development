import React from 'react';
import CourseTable from './CourseTable';

const data = [
  // ...your data here
];

function App() {
  return (
    <div className="App">
      <h1>Course Table</h1>
      <CourseTable data={data[0]} />
    </div>
  );
}

export default App;
