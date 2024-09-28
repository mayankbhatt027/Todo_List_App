import { data } from 'autoprefixer';
import React,{useState} from 'react'
import './TodoList.css'


function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("");

  function Createtodo() {
    if (input.length === 0) {
      setStatus("Error: Task cannot be empty");
    } else {
      const updatedTodo = [...todo, input];
      setTodo(updatedTodo);
      setStatus(""); // Reset status after successful addition
      setInput(""); // Clear the input field after adding the task
    }
  }

  function Delete(i) {
    const newArr = [...todo];
    newArr.splice(i, 1);
    setTodo(newArr);
  }

  function Edit(i) {
    const edited = [...todo];
    edited[i] = input;
    setTodo(edited);
    setInput(""); // Clear input after editing
  }

  return (
    <div id='app' className='w-96 rounded-lg border border-gray-500 bg-lime-300'>
      <div>{status && <p className="error-text">{status}</p>}</div>
      <input
        value={input}
        className='border border-gray-800 rounded-full leading-8 pl-4 w-60 ml-3 mb-2'
        type="text"
        placeholder="Add Task here...."
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        onClick={Createtodo} 
        className=" leading-4 border border-sky-200 p-2 ml-4 mt-4 bg-blue-300 hover:bg-blue-800 hover:text-white">
        Add
      </button>
      <br />
      {todo.map((data, i) => {
        return (
          <div className="ml-2 mr-2  " key={i}>
            {i}. <span className='border border-black bg-white rounded-md p-0.5 w-96'>{data}</span>
            <button 
              className='border border-black rounded-lg p-0.5 text-white bg-rose-700 hover:bg-red-400' 
              onClick={() => Delete(i)}>
              Delete
            </button>
            <button 
              className='border border-black rounded-lg p-0.5 text-white bg-emerald-950 hover:bg-indigo-700' 
              onClick={() => Edit(i)}>
              Edit
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default TodoList;
