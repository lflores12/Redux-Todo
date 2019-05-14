import {ADD_TODO} from '../actions'

const initialState = {
    todos: [
        {
            text: 'Clean Room',
            completed: false,
            id: 0
        }
    ]
};

export const todoReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
        return {...state, 
            todos: [
            ...state.todos,
                { text: action.payload, completed: false }
            ]
        };

      //   case TOGGLE_COMPLETED:
      // return {
      //   ...state,
      //   members: state.todos.map(todo => {
      //     if (todo.id === action.payload) {
      //       return {
      //         ...todo,
      //         completed: !todo.completed
      //       };
      //     }
      //     return todo;
      //   })
      // };
      default :
        return state;
    }
}