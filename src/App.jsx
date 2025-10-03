import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todolist from "./Todolist";
// import  from "./Itemlist";
function App() {
  const [count, setTodo] = useState("");
  let listArray = [];
  console.log(listArray, "listarray in app.jsx");

  return (
    <>
      <div className="cantainer">
        <div className="cantainer-inner">

          <center>
<h1>Todo List</h1>
          <Todolist listArray={listArray}></Todolist>
          </center>
        </div>
      </div>
    </>
  );
}

export default App;
