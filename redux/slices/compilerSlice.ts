import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    };
    currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
    fullCode: {
        html: `<div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Enter your task">
        <button onclick="addTask()">Add Task</button>
        <ul id="taskList"></ul>
</div>`,
        css: `body {
      font-family: 'Arial', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50vh;
      margin: 0;
  }
  
  .container {
      text-align: center;
  }
  
  input {
      padding: 8px;
      margin-right: 8px;
  }
  
  button {
      padding: 8px;
  }  
    `,
        javascript: `function addTask() {
  
      const taskInput = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');
      
      if (taskInput.value !== '') {
          const taskItem = document.createElement('li');
          taskItem.textContent = taskInput.value;
          taskList.appendChild(taskItem);
          taskInput.value = '';
  
          taskItem.addEventListener('click', function () {
              taskList.removeChild(taskItem);
          });
      } else {
            alert('Please enter a task');
      }
  }
  
    `,
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (
            state,
            action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
        ) => {
            state.currentLanguage = action.payload;
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload;
        },
        updateFullCode: (
            state,
            action: PayloadAction<CompilerSliceStateType["fullCode"]>
        ) => {
            state.fullCode = action.payload;
        },
    },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } =
    compilerSlice.actions;
