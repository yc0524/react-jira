const SearchPanel = (props) => {
  const { param, setParam, users } = props;

  const handleNameChange = (e) => {
    setParam &&
      setParam({
        ...param,
        name: e.target.value,
      });
  };

  const handlePersonIdChange = (e) => {
    setParam &&
      setParam({
        ...param,
        personId: e.target.value,
      });
  };

  return (
    <form>
      <div>
        <input value={param.name} onChange={handleNameChange} />

        <select value={param.personId} onChange={handlePersonIdChange}>
          <option value={""}>负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
