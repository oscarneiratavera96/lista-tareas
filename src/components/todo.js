import { useState } from "react";

const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setisEdit] = useState(false);

  function FormEdit() {
    const [newValue, setnewValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setnewValue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(item.id, newValue);
      setisEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          type="text"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle"> {item.title}</span>

        <button className="button" onClick={() => setisEdit(true)}>
          Edit
        </button>
        <button onClick={(e) => onDelete(item.id)} className="buttonDelete">
          Delete
        </button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
