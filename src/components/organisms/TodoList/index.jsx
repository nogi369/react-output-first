export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <button onClick={() => {handleDeleteTodo(todo.id, todo.title)}}>完了</button>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  )
}