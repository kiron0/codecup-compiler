import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    };
    config: {
        html: string;
        javascript: string;
    };
    currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
    fullCode: {
        html: `<div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-2xl font-bold">K Task ToDo</h1>
    <p class="text-gray-500 mb-5">Add your task to the list</p>

    <div class="flex items-center gap-2">
        <input type="text" id="taskInput" class="border py-2 px-4 rounded-lg focus:outline-none" placeholder="Enter your task">
        <button class="bg-gray-800 text-white px-4 py-2 rounded-lg" onclick="addTask()">Add Task</button>
    </div>

    <div class="flex justify-start items-start">
        <ul id="taskList" class="mt-5"></ul>
    </div>

    <div id="errorMessage" class="text-red-500 mt-5 font-semibold"></div>
</div>`,
        css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Nunito", sans-serif;
    overflow-x: hidden;
} 
    `,
        javascript: `const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");
        
const addTask = () => {
  if (taskInput.value !== "") {
    errorMessage.innerHTML = "";
    const taskItem = document.createElement("li");
        
    taskItem.classList.add(
       "border",
       "py-2",
       "px-4",
       "rounded-lg",
       "mb-2",
       "hover:bg-gray-700",
       "hover:text-white",
       "duration-300",
       "cursor-pointer"
    );
        
    taskItem.innerHTML = taskInput.value;
    taskList.appendChild(taskItem);
    taskInput.value = "";
        
    taskItem.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
  } else {
    errorMessage.innerHTML = "Please enter a task first!";
    return;
  }
};
        `,
    },
    config: {
        html: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
        `,
        javascript: "",
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
        updateConfig: (
            state,
            action: PayloadAction<CompilerSliceStateType["config"]>
        ) => {
            state.config = action.payload;
        },
    },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode, updateConfig } =
    compilerSlice.actions;
