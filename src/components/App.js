import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const addField = () => {
    setFields((prev) => [...prev, { name: "", age: "" }]);
  };

  const removeField = (index) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const updateField = (index, newField) => {
    setFields((prev) => {
      const newFields = [...prev];
      newFields[index] = newField;
      return newFields;
    });
  };

  const handleSubmit = () => {
    console.log(fields);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {fields.map((field, index) => (
        <Row
          key={index}
          index={index}
          field={field}
          updateField={updateField}
          removeField={removeField}
        />
      ))}
      <div>
        <button onClick={addField}>Add More..</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h3>After clicking submit check console for data</h3>
    </div>
  );
};

const Row = ({ index, field, updateField, removeField }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={field.name}
        onChange={(e) =>
          updateField(index, { ...field, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        value={field.age}
        onChange={(e) =>
          updateField(index, { ...field, age: e.target.value })
        }
      />
      <button onClick={() => removeField(index)}>Remove</button>
    </div>
  );
};

export default App;
