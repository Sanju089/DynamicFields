import { useState } from "react";

export default function DynamicForms() {
  const [names, setNames] = useState([{ firstName: "", lastName: "" }]);
  function changeFields(index, e) {
    const values = [...names];
    values[index][e.target.name] = e.target.value;
    setNames(values);
  }
  function addFields() {
    const values = [...names];
    values.push({ firstName: "", lastName: "" });
    setNames(values);
  }
  function removeFields(index) {
    const values = [...names];
    values.splice(index, 1);
    setNames(values);
  }
  return (
    <>
      <h1>Dynamic FormsFields</h1>

      {names.map((name, index) => {
        return (
          <div key={index}>
            <label>
              FirstName:
              <input
                type="text"
                name="firstName"
                value={name.firstName}
                onChange={(e) => changeFields(index, e)}
                placeholder="Inter yourFirstname"
              />
            </label>
            <br />
            <label>
              LasttName:
              <input
                type="text"
                name="lastName"
                value={name.lastName}
                onChange={(e) => changeFields(index, e)}
                placeholder="Inter yourFirstname"
              />
            </label>
            <button onClick={removeFields}>Remove</button>
            <button onClick={addFields}>Add Name</button>
          </div>
        );
      })}
      {names.map((name, index) => (
        <p key={index}>
          Name {index + 1}: {name.firstName} {name.lastName}
        </p>
      ))}
    </>
  );
}
