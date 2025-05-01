import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tutorials, setTutorials] = useState([]);

  // Fetch tutorials from the backend API
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/tutorials');
        setTutorials(response.data);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      }
    };

    fetchTutorials();
  }, []);

  return (
    <div className="App">
      <h1>Tutorial List</h1>
      <ul>
        {tutorials.length > 0 ? (
          tutorials.map((tutorial) => (
            <li key={tutorial._id}>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <p>Published: {tutorial.published ? 'Yes' : 'No'}</p>
            </li>
          ))
        ) : (
          <p>No tutorials found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
