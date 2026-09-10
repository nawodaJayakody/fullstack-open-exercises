const Person = ({ person }) => {
  return (
    <>
      <span>{`${person.name} ${person.number}`}</span>
      <br />
    </>
  );
};
export default Person;
