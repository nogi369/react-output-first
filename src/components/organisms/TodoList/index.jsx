export const TodoList = (props) => {
  const { todoList } = props;

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <span>{todo.content}</span>
        </li>
      ))}
    </ul>
  )
}