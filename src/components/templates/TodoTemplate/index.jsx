import { useState } from "react"
import { INIT_TODO_LIST } from "../../../constants/data";
import { TodoList } from "../../organisms/TodoList";
import { searchTodo } from "../../../utils/todoLogic";

export const TodoTemplate = () => {
  const [ originTodoList, setOriginTodoList ] = useState(INIT_TODO_LIST);
  const [ showTodoList, setShowTodoList ] = useState(INIT_TODO_LIST);
  const [ searchKeyword, setSearchKeyword ] = useState("");

  // 表示用TodoList更新処理
  const updateShowTodoList = (newTodoList, keyword) => {
    setShowTodoList(
      keyword !== "" ? searchTodo.filter(newTodoList, keyword) : newTodoList
    );
  };

  // Todo削除処理
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // https://www.digitalocean.com/community/tutorials/js-filter-array-method-ja
      // todoのidとtargetIdが一致しないものを新しい配列に格納する
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId)
      console.log(newTodoList);

      setOriginTodoList(newTodoList);
      console.log(newTodoList);
      updateShowTodoList(newTodoList, searchKeyword);
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
        <section>
          {showTodoList.length > 0 && (
            <TodoList
              todoList={showTodoList}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </section>
    </div>
  )
}