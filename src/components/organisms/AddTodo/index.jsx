export const AddTodo = (props) => {
  const { addInputValue, handleAddTodo, onChangeTodo } = props;

  return (
    <input
      type="text"
      value={addInputValue}
      onChange={onChangeTodo}
      onKeyDown={handleAddTodo}
      placeholder="New Todo"
    />
  );
}