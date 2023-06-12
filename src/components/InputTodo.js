import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = (props) => {
    const [title, setTitle] = useState({value: ""});
    const onChange = e => {
      setTitle({
        value: e.target.value
      });
    };

    
}