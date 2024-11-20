import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

export interface TaskState {
    task: Task[],
}

export const initialState: TaskState = {
  task: [],
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const taskSlice = createSlice ({
    name: 'task',
    initialState,
    reducers:{
      createTask: (state, action: PayloadAction<string> )=>{
        const newTask: Task = {
          id: nanoid(),
          text: action.payload,
          completed: false,
        }
        state.task.push(newTask);
      },
      deleteTask: (state, action: PayloadAction<string>)=>{
          state.task = state.task.filter((task: Task)=>task.id!==action.payload)
      },

      toggleTask: (state, action: PayloadAction<string>) => {
        const task = state.task.find((task) => task.id === action.payload);
        if (task) {
          task.completed = !task.completed;
        }
      },

      editTask: (state, action) => {
        const { id, updatedText } = action.payload;
        const task = state.task.find((task) => task.id === id);
        if (task) {
          task.text = updatedText;
        }
      },
    },
})

export const {createTask, deleteTask, toggleTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;