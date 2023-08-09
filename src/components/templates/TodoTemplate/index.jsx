import { useState } from "react";
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import { TodoList } from "../../organisms/TodoList";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data";
import { searchTodo } from "../../../utils/todoLogic";
import styles from "./styles.module.css"

export const TodoTemplate = () => {
  // デフォルトTodoList
  const [ originTodoList, setOriginTodoList ] = useState(INIT_TODO_LIST);
  // 入力値
  const [ addInputValue, setAddInputValue ] = useState("");
  // 一意のID
  const [ uniqueId, setUniqueId ] = useState(INIT_UNIQUE_ID);
  // 検索キーワード
  const [ searchKeyword, setSearchKeyword ] = useState("");
  // 表示用TodoList
  const [ showTodoList, setShowTodoList ] = useState(INIT_TODO_LIST);

  // addInputValueの変更処理
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  // 表示用TodoList更新処理
  const updateShowTodoList = (newTodoList, keyword) => {
    setShowTodoList(
      keyword !== "" ? searchTodo(newTodoList, keyword) : newTodoList
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
    if (e.key === "Enter" && addInputValue !== "") {
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

  /*
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
  */

  // Todo削除処理
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // https://www.digitalocean.com/community/tutorials/js-filter-array-method-ja
      // todoのidとtargetIdが一致しないものを新しい配列に格納する
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodoList);

      updateShowTodoList(newTodoList, searchKeyword);
    }
  };

  // Todo検索処理
  const handleSearchTodo = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    updateShowTodoList(originTodoList, keyword);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder="Search Keyword"
          handleChangeValue={handleSearchTodo}
        />
      </section>
      <section className={styles.common}>
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