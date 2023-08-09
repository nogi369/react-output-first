import styles from "./styles.module.css"

export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          <button className={styles.delete} onClick={() => handleDeleteTodo(todo.id, todo.title)}>完了</button>
          <span className={styles.task}>{todo.title}</span>
        </li>
      ))}
    </ul>
  )
}