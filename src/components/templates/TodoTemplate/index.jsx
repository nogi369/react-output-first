import { useState } from "react"
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data";
import { TodoList } from "../../organisms/TodoList";
import { searchTodo } from "../../../utils/todoLogic";
import { AddTodo } from "../../organisms/AddTodo";

export const TodoTemplate = () => {
  // デフォルトTodoList
  const [ originTodoList, setOriginTodoList ] = useState(INIT_TODO_LIST);
  // 表示用TodoList
  const [ showTodoList, setShowTodoList ] = useState(INIT_TODO_LIST);
  // 検索キーワード
  const [ searchKeyword, setSearchKeyword ] = useState("");
  // 入力値
  const [ addInputValue, setAddInputValue ] = useState("");
  // 一意のID
  const [ uniqueId, setUniqueId ] = useState(INIT_UNIQUE_ID);

  // addInputValueの変更処理
  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  // 表示用TodoList更新処理
  const updateShowTodoList = (newTodoList, keyword) => {
    setShowTodoList(
      keyword !== "" ? searchTodo.filter(newTodoList, keyword) : newTodoList
    );
  };

  /*
  addInputValue => useStateで状態管理
  onChangeTodo => 新規登録処理より上で定義する
  handleAddTodo => 新規登録処理のメイン記述
  */

  // Todo新規登録処理
  const handleAddTodo = (e) => {
    // 条件が両方成立すればtrue (AND)
    if (e.key ==="Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      // Todo追加処理
      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(newTodoList, searchKeyword);
      
      updateShowTodoList(newTodoList, searchKeyword);

      setUniqueId(nextUniqueId);
      setAddInputValue("");
    }
  };

  // Todo削除処理
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // https://www.digitalocean.com/community/tutorials/js-filter-array-method-ja
      // todoのidとtargetIdが一致しないものを新しい配列に格納する
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId)

      setOriginTodoList(newTodoList);

      updateShowTodoList(newTodoList, searchKeyword);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
        <section>
          <AddTodo
            addInputValue={addInputValue}
            onChangeTodo={onChangeAddInputValue}
            handleAddTodo={handleAddTodo}
          />
        </section>
        <section>
          {showTodoList.length > 0 && (
            <TodoList
              todoList={showTodoList}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </section>
    </div>
  );
};