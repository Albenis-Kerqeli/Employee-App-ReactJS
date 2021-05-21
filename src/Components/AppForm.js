const AppForm = () => {
  return (
    <div className="App__form">
      <form onSubmit={addEmployee}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Employee Name"
        />
        <input
          type="text"
          onChange={e => setPosition(e.target.value)}
          placeholder="Employee Position"
        />
        <input
          type="number"
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="number"
          onChange={e => setSalary(e.target.value)}
          placeholder="Salary"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AppForm;
