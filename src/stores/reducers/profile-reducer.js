import importantIcon from "../../assets/all-images/icons/important.svg"
import workIcon from "../../assets/all-images/icons/work.svg";
import rocketIcon from "../../assets/all-images/icons/rocket.svg";
import bookIcon from "../../assets/all-images/icons/book.svg";
import completedIcon from "../../assets/all-images/icons/completed.svg";
import basketIcon from "../../assets/all-images/icons/basket.svg";


const initialState = {
  lists: [
    {
      id: 1,
      name: "Важное",
      src: importantIcon
    },
    {
      id: 2,
      name: "Работа",
      src: workIcon
    },
    {
      id: 3,
      name: "Цели",
      src: rocketIcon
    },
    {
      id: 4,
      name: "Книги",
      src: bookIcon
    },
  ],
  archive: [
    {
      id: 1,
      name: "Выполнено",
      src: completedIcon
    },
    {
      id: 2,
      name: "Корзина",
      src: basketIcon
    }
  ]
};






const profileReducer = (state = initialState, action) => {
 
  switch (action.type) {
    // case SET_MODE:
    //   return {
    //     ...state,
    //     ...state.participants.forEach((user) => user.id === action.payload.id ? user.tradingMode = action.payload.statusMode : user.tradingMode)
    //   };
        
    default:
      return state;
  }
};


// export const setTradingMode = (id, statusMode) => ({type: SET_MODE, payload:{id, statusMode}});


export default profileReducer;