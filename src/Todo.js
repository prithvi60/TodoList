import {Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebaseconfig';
import './Todo.css';

export default function MyListItem({todo,inprogress,id}) {
   function toggleInProgress(){
     db.collection("toodo").doc(id).update({
        inprogress: !inprogress,
     });
   }

   function deleteTodo() {
  db.collection("toodo").doc(id).delete();
 }

  return (
        <div class="Show">
          <ListItem >
          <ListItemText primary= {todo} 
            secondary = {inprogress ? "In progress" : "Completed"}         
         /> 
          </ListItem>

          <Button onClick={toggleInProgress}>{inprogress ? "Done" : "Undone"} </Button>
          <Button onClick={deleteTodo}>X</Button>

        </div>
    )
}
