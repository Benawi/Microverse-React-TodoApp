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
    
}