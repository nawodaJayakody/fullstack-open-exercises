const PersonForm = ({
  addPerson,
  newName,
  onChangeName,
  newNumber,
  onChangeNumber,
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={onChangeName} />
          <div>
            number: <input value={newNumber} onChange={onChangeNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default PersonForm;
