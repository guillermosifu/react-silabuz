import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState("");
  
    const handleInput = (e) => {
    // recibimos el evento
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) {
            return;
        }

        onNewCategory(inputValue.trim())
        setInputValue("")
    }

    return (
    <form onSubmit={onSubmit}>
        <input onChange={handleInput} value={inputValue} type="text" placeholder="Buscar gif..."/>
    </form>
  )
}

