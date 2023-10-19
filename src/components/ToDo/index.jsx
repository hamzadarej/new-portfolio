const ToDo = () => {
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [toDo, setToDo] = useState('');
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setToDo(e.target.value);
    console.log(e.target.value);
  };
  const handleChecked = (e) => {
    setChecked(e.target.checked);
    console.log(e.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, toDo]);
    setToDo('');
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Liste</h1>
        <input type="text" placeholder="Arikel hinzufügen" onChange={handleOnChange} value={toDo}></input>

        <button type="submit">Add</button>
      </form>
      <div className="flexCol">
        <h4>toDo</h4>
        {list.map((item) => {
          return (
            <div key={item}>
              <span>{item}</span>
              {checked && <input type="checkbox" onChange={handleChecked}></input>}
            </div>
          );
        })}
      </div>
      {!!doneList.length && (
        <div className="flexCol">
          <h4>Done</h4>
          {doneList.map((item) => {
            return (
              <div key={item}>
                <span>{item}</span>
                <input type="checkbox"></input>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToDo;
