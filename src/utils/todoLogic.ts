// 検索処理
export const searchTodo = (todoList, keyword) => {
  todoList.filter((todo) => {
    // https://typescriptbook.jp/reference/builtin-api/regexp
    const regExp = new RegExp("^" + keyword, "i");
    return todo.title.match(regExp);
  })
}