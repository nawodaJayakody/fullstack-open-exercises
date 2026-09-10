import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [find, setfind] = useState("");

  const onFindChange = (event) => {
    setfind(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(find.toLowerCase())
  );

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onChangeName = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const duplicate = persons.find((p) => p.name === newName);

    if (duplicate) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter find={find} onfindChange={onFindChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        onChangeName={onChangeName}
        newNumber={newNumber}
        onChangeNumber={onChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};
export default App;
