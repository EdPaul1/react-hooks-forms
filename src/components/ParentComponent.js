import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [LastName, setLastName] =useState("Henry");

function handleFirstNameChange(event) {
    setFirstName(event.target.value);
}
function handleLastNameChange(event) {
    setLastName(event.target.value);
}
return (
    <div>
    <Form
    firstName={firstName}
    LastName={LastName}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}
    />
    <DisplayData firstName={firstName} LastName={LastName} />

    </div>
);
}
export default ParentComponent;