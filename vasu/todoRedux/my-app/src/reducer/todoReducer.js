const initialData = {
  List: [],
};

//const [list,setList]=usestate([])

const TodoReducer = (state = initialData, action) => {
  //   localStorage.setItem("List", JSON.stringify(state.List));
  switch (action.type) {
    case "ADD_TODO":
      const { id, data, isCompleted } = action.payload;

      return {
        ...state, //initial state i;e,inintial whole data
        List: [
          ...state.List, //to get previous state also
          {
            id: id, //used for delete
            data: data, //to display data
            isCompleted: isCompleted,
          },
        ],
      };

    case "DEL_TODO":
      const newList = state.List.filter((elem) => elem.id !== action.id);
      return {
        ...state, //initial state i;e,inintial whole data
        List: newList,
      };
    case "DELALL_TODO":
      return {
        ...state, //initial state i;e,inintial whole data
        List: [],
      };
    case "STRIKE_ELEM":
      const filteredList = state.List.map((elem) => {
        if (elem.id === action.payload.id) {
          let newElem = {
            id: elem.id,
            data: elem.data,
            isCompleted: action.payload.checked,
          };
          return newElem;
        } else {
          return elem;
        }
      });
      return {
        ...state,
        List: filteredList,
      };

    case "SHOW_ALL":
      return {
        ...state,
        List: state.List,
      };

    default:
      return state;
  }
};

export default TodoReducer;
