const Filter = ({ find, onfindChange }) => {
  return (
    <div>
      filter shown with: <input value={find} onChange={onfindChange} />
    </div>
  );
};
export default Filter;
