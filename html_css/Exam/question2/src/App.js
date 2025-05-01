import React from 'react';
import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <h2>Student Information</h2>
      <StudentCard name="kuhan" grade="A+" email="kuhan@example.com" />
      <StudentCard name="Karthik" grade="B" email="karthik@example.com" />
    </div>
  );
}

export default App;
