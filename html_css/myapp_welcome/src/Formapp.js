import React from 'react';

function NewTutorial() {
  return (
    <>
      <h2>New Tutorial Form</h2>
      Title: <input type="text" /> <br /> <br />
      Description : <input type="text" /> <br /> <br />
      <label>
        Published:
        <select name="isPublished">
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </label> <br /> <br />
      <button>SAVE TUTORIAL</button>
    </>
  );
}

export default NewTutorial;
