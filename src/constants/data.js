// 相違点：data ＝＞ INIT_TODO_LIST(定数名)

// TodoListの初期値
export const INIT_TODO_LIST = [
  {
      id: 1,
      content: "Todo1",
  },
  {
      id: 2,
      content: "Todo2",
  },
];

// Todo採番IDの初期値
export const INIT_UNIQUE_ID = INIT_TODO_LIST.length