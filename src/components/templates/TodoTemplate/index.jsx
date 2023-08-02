import { useState } from "react"
import { INIT_TODO_LIST } from "../../../constants/data";
import { TodoList } from "../../organisms/TodoList";

export const TodoTemplate = () => {
    // const  [ originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  const  [ showTodoList, setShowTodoList] = useState(INIT_TODO_LIST);

  return (
    <div>
      <h1>Todo List</h1>
        <section>
          {showTodoList.length > 0 && (
            <TodoList
              todoList={showTodoList}
            />
          )}
        </section>
    </div>
  )
}