import React from 'react';

function StudentCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px',
      width: '250px'
    }}>
      <h3>{props.name}</h3>
      <p><strong>Grade:</strong> {props.grade}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
}

export default StudentCard;
