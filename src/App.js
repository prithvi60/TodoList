
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebaseconfig';
import firebase from 'firebase';
import MyListItem from './Todo';


function App() {
// usestate hook
  const [todoInput,setTodoInput] = useState("");
  const [todos,setTodos] = useState([]);
  useEffect(() => {
    getTodo();
  },[]);

  function getTodo(){
    db.collection("toodo").onSnapshot( (querySnapshot) =>{
setTodos(   
     querySnapshot.docs.map((doc)=>({
      id: doc.id,
      todo: doc.data().todo,
      inprogress: doc.data().inprogress
    }
     ) )
    );
   } );
  }
//  send data to fire base
 function addTodo() {  
        
      db.collection("toodo").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
      });
      // clear the input field
      setTodoInput("");
  }
  return (
    <div className="App">
      <h1>Tasks 🔥</h1>
      <form>
        {/* material ui text field */}
        <TextField id="standard-basic" 
        label="Type your todos" 
        value={todoInput}
        onChange={(e)=> {
          setTodoInput(e.target.value);
          // console.log(`todo is: ${e.target.value}`);
        }}    
      />
      {/* material ui button */}
      <Button 
      className="mainButton"
      disabled={todoInput<1}
      type="submit"
      variant="contained" color="primary"
      onClick={addTodo}>
        Enter
      </Button>
</form>
        {todos.map((todo)=> (
          <MyListItem 
          todo={todo.todo}
          inprogress={todo.inprogress} 
          id={todo.id} 
           />
          ))
        }

    </div>
  );
}

export default App;
