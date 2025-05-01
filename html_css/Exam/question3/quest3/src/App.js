// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ title: '', description: '', isPublished: 'true' });
  const [tutorials, setTutorials] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tutorials', {
        ...formData,
        isPublished: formData.isPublished === 'true'
      });
      alert("Tutorial added!");
    } catch (err) {
      alert("Error adding tutorial");
    }
  };

  const fetchTutorials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tutorials');
      setTutorials(res.data);
    } catch (err) {
      alert("Error fetching tutorials");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Tutorial</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required /><br /><br />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required /><br /><br />
        <select name="isPublished" value={formData.isPublished} onChange={handleChange}>
          <option value="true">Published</option>
          <option value="false">Unpublished</option>
        </select><br /><br />
        <button type="submit">Add Tutorial</button>
      </form>

      <hr />
      <button onClick={fetchTutorials}>Get Tutorials</button>
      <ul>
        {tutorials.map((tut, index) => (
          <li key={index}>
            <strong>{tut.title}</strong> - {tut.description} - {tut.isPublished ? "Published" : "Unpublished"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
