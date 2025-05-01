import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState('true');
  const [tutorials, setTutorials] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTutorial = {
        title,
        description,
        published: published === 'true',
      };
      await axios.post('http://localhost:5001/api/tutorials', newTutorial);
      alert('Tutorial added successfully!');
      // Clear form after submitting
      setTitle('');
      setDescription('');
      setPublished('true');
    } catch (error) {
      console.error('Error adding tutorial:', error);
      alert('Failed to add tutorial.');
    }
  };

  const handleGetTutorials = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/tutorials');
      setTutorials(response.data);
    } catch (error) {
      console.error('Error fetching tutorials:', error);
      alert('Failed to fetch tutorials.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div><br />
        <div>
          <label>Description:</label><br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div><br />
        <div>
          <label>Published:</label><br />
          <select
            value={published}
            onChange={(e) => setPublished(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div><br />
        <button type="submit">Save Tutorial</button>
      </form>

      <hr />

      <button onClick={handleGetTutorials}>Get All Tutorials</button>

      <h2>Tutorial List</h2>
      <ul>
        {tutorials.map((tutorial) => (
          <li key={tutorial._id}>
            <strong>Title:</strong> {tutorial.title}<br />
            <strong>Description:</strong> {tutorial.description}<br />
            <strong>Published:</strong> {tutorial.published ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
