import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState();
  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault()
    onNewCategory(inputValue.trim())
    setinputValue(' ')
}
  return (
    <form onSubmit={(event)=> onSubmit(event)}>
         <input
      type="text"
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={onInputChange}
    />
    </form>
   
  );
};
