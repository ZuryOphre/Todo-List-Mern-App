import {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  
//add new todo item to database
const addItem = async (e) => {
  e.preventDefault();
  try{
    const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
    console.log(res);
    setItemText('');
  }catch(err){
    console.log(err);
  }
}

//create function to fetch all todo items from database -- we will use useEffect hook
useEffect(()=>{
    const getItemsList = async () => {
      try{
        const res = await axios.get('http://localhost:5500/api/items')
        setListItems(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getItemsList()

},[listItems])

//Delete item when click on delete
const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
    const newListItems = listItems.filter(item=> item._id !== id);
    setListItems(newListItems);
  }catch(err){
    console.log(err);
  }
}


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
      <input type="text" placeholder='Add Todo Item' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">add</button>
      </form>
      <div className="todo-listItems">
        {
          listItems.map(item => (
            <div className="todo-item">
              <p className="item-content">{item.item}1</p>
              <button className="update-item">Update</button>
              <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Delete</button>
            </div>
          ))
        }
        </div>
      </div>
  );
}

export default App;
