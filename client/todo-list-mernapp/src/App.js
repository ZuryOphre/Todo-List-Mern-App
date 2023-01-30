import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form">
        <input type="text" placeholder='Add Todo Item'/>
        <button type="submit">add</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p className="item-content">this is the item 1</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is the item 2</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is the item 3</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
