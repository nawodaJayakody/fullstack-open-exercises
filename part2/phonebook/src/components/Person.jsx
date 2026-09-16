const Person = ({ person, deletePerson }) => {
  return (
    <div>
      <span>{`${person.name} ${person.number}`}</span>
      <button onClick={deletePerson}>delete</button>
      <br />
    </div>
  );
};

export default Person;
