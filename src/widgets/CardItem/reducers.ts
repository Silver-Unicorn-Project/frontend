const initialState = {
  todos: [],
  // other state properties specific to the todos feature
};

// Action types
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
// add more action types if needed

// Action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // handle adding a todo to the state
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false }],
      };
    case TOGGLE_TODO:
      // handle toggling a todo's completed status
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    // handle other action types if needed
    default:
      return state;
  }
};

export default todosReducer;
