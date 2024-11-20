import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {createTask, deleteTask, toggleTask, editTask} from "../store/taskreducer";
import { Task } from "../store/taskreducer";

function handleTask() {
  const [taskValue, setTaskValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const dispatch = useDispatch();
  const inputTask = useSelector((state: any) => state.taskReducer.task);

  const handleCreateTask = () => {
    if (taskValue.trim()) {
      dispatch(createTask(taskValue));
      setTaskValue("");
    }
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleEditClick = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(editTask({ id: editingId, updatedText: editText }));
      setEditingId(null);
      /*setEditText("");*/
    }
  };

  const handleCancelTask = () => {
    setEditingId(null); 
    setEditText(""); 
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-center gap-2 ">
        <input className="border-black border-2 rounded-md pl-2" placeholder="Enter here" type="text" value={taskValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskValue(e.currentTarget.value)}/>
        <button className="rounded-md border border-green-500 text-green-500 font-medium p-1 hover:text-white hover:bg-green-700" onClick={handleCreateTask}>
          Add
        </button>
      </div>

      <div className="flex flex-col gap-6 items-center ">

        {inputTask.map((task: Task) => (
            <ul key={task.id} className={!task.completed? "item-index border-2 border-green-500 rounded p-1 hover:shadow-2xl hover:shadow-green-200": "item-index border-2 border-green-500 rounded p-1 hover:shadow-2xl hover:shadow-green-200 opacity-30"}>
            <div className="hover:text-red-700 font-medium line-clamp-1 w-64" style={{textDecoration: task.completed ? "line-through" : "none"}}>
                {editingId === task.id ? (<input type="text" value={editText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditText(e.target.value)} className="border-2 border-gray-300 rounded-md p-1 mt-2"/>
                ) : (task.text)}
            </div>
            {editingId === task.id ? (
                <div className="flex flex-col w-1/2 m-auto">
                    <button className="my-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-md font-medium shadow-md" onClick={handleSaveEdit}>Save</button>
                    <button className="my-3 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white transition px-4 py-2 rounded-md font-medium shadow-md" onClick={handleCancelTask}>Cancel</button>
                </div>
            ) : (
            <div className="flex flex-col w-1/2 m-auto">
                <button className="my-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition px-2 py-1 rounded-md font-medium shadow-md" onClick={() => handleToggleTask(task.id)}>{task.completed ?"Mark undone":"Mark done"}</button>
                <button className="my-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition px-2 py-1 rounded-md font-medium shadow-md" onClick={() => handleEditClick(task)}> Edit </button>  
                <button className="my-1 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition px-2 py-1 rounded-md font-medium shadow-md" onClick={() => handleDeleteTask(task.id)}> Delete </button>
            </div>
            )}
        </ul>
        ))}

      </div>
      
    </div>
  );
}

export default handleTask;
