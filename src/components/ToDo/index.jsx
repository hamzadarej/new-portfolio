import { useState } from 'react';
import uniqueId from 'lodash/uniqueId';

const ToDo = () => {
  const [list, setList] = useState([]);
  const [toDo, setToDo] = useState('');
  const handleOnChange = (e) => {
    setToDo(e.target.value);
  };
  const handleChecked = (e) => {
    const newList = list?.map((item) => {
      if (item.id == e.target?.id) {
        item.boxChecked = true;
      }
      return item;
    });
    setList(newList);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uniqueId('toDo_');
    setList([...list, { item: toDo, id, boxChecked: false }]);
    setToDo('');
  };
  const resetToDo = (id) => {
    const newList = list?.map((item) => {
      if (item.id === id) {
        item.boxChecked = false;
      }
      return item;
    });

    setList(newList);
  };
  const deleteTodo = (id) => {
    const newList = list?.filter((item) => item.id !== id);
    setList(newList);
  };
  const hasDoneToDo = !!list?.find((el) => el.boxChecked);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Liste</h1>
        <input
          className="border-gray-700 border-solid border rounded-l p-1 mx-2 w-[15rem]"
          type="text"
          placeholder="Arikel hinzufügen"
          onChange={handleOnChange}
          value={toDo}
        ></input>

        <button className="bg-sky-50 p-1 rounded-l border-gray-700 border-solid border hover:bg-sky-100" type="submit">
          Add
        </button>
      </form>
      <div className="flex-col flex m-2">
        <h4>toDo</h4>
        {list.map(({ item, id, boxChecked }) => {
          return (
            <div key={item}>
              {!boxChecked && (
                <div className="border border-solid border-gray-700 max-w-[14rem] rounded-3xl text-green-600 text-green-600 text-center space-x-2">
                  <span>{item}</span>
                  <input type="checkbox" onChange={handleChecked} id={id}></input>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {hasDoneToDo && (
        <div className="flex my-3 flex-col">
          <h4 className="text-green-600">Done</h4>
          {list.map(({ item, boxChecked, id }) => {
            return (
              <div key={id}>
                {boxChecked && (
                  <div
                    key={item}
                    className="border border-solid border-gray-700 max-w-[14rem] rounded-3xl text-green-600 text-green-600 text-center space-x-2"
                  >
                    <span>{item}</span>
                    <input disabled type="checkbox" defaultChecked></input>
                    <span className="text-red-700" onClick={() => resetToDo(id)}>
                      x
                    </span>
                    <span onClick={() => deleteTodo(id)}>delete</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToDo;
