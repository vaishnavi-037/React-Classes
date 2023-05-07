import React, { useState } from "react";

function USobject() {
  const [name, setName] = useState({ firstName: "", lastName: "" }); //state can be a object, number, boolean, string, array etc

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default USobject;
//useState doesn't merge the state and update it like setState do
//to overcome this we use spread operator (...)
