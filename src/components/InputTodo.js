import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = (props) => {
    const [title, setTitle] = useState({value: ""});
    const onChange = e => {
      setTitle({
        value: e.target.value
      });
    };
    const handleSubmit = e => {
        e.preventDefault()
        if (title.value.trim()) {
          props.addTodoProps(title.value);
          setTitle({
            value: "",
          });
        } else {
          alert("Please write item");
        }
      };
      return (
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={title.value}
            name="title"
            onChange={onChange}
          />
          <button className="input-submit">
            <FaPlusCircle
              style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
            />
          </button>
        </form>
      )
    };

    export default InputTodo;