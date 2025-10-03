import React, { useState } from "react";

function Todolist(e) {
  const [listArray, setListArray] = useState([]);
  function addToDoItems(e) {
    e.preventDefault();
    let inputValue = e.target.inputValue.value;
    if (!inputValue) return;

    if (!listArray.includes(inputValue)) {
      setListArray([...listArray, inputValue]);
    } else {
      alert("item alrady exist");
    }
    e.target.reset();
  }
  function DeleteItem(index) {
    setListArray(listArray.filter((_,i)=>i!==index))
  }

  return (
    <form onSubmit={addToDoItems}>
      <div className="form-inner">
        <input type="text" name="inputValue" placeholder="Enter Items To Add" />
        <button type="submit">ADD TO LIST</button>
      </div>
      <div className="listItems">
        <ul>
          {listArray.map((item, index) => (
            <li key={index}>
              {item}
              <button
                type="button" className="deletebtn"
                onClick={() => DeleteItem(index)}
              ><i class="fa-solid fa-trash"></i></button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
export default Todolist;
