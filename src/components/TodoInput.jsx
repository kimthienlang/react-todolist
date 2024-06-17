
export default function TodoInput(props) {
  const {handleAddTodos, inputValue, setInputValue} = props

  function textHandleChange(e) {
    setInputValue(e.target.value)
  }

  function textHandleEnter(e) {
    if (e.key === "Enter") {
      addHandleClick()
    }
  }

  function addHandleClick() {
    let str = inputValue.trim()
    if (str != '') {
      handleAddTodos(inputValue)
      setInputValue('')
    }
  }

  return (
    <header>
      <input value={inputValue} onChange={textHandleChange} onKeyDown={textHandleEnter} type="text" placeholder="Enter todo..." />
      <button onClick={addHandleClick}>Add</button>
    </header>
  );
}
