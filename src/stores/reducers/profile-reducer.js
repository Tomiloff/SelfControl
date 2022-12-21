import importantIcon from "../../assets/all-images/icons/important.svg"
import workIcon from "../../assets/all-images/icons/work.svg";
import rocketIcon from "../../assets/all-images/icons/rocket.svg";
import bookIcon from "../../assets/all-images/icons/book.svg";
import completedIcon from "../../assets/all-images/icons/completed.svg";
import basketIcon from "../../assets/all-images/icons/basket.svg";


const SET_LIST_DATA = "profile/SET_LIST_DATA"


const initialState = {
  lists: [
    {
      id: 1,
      name: "Важное",
      src: importantIcon,
      tasks: [
        {
          id: 1,
          text: "Купить молоко и хлеб"
        },
        {
          id: 2,
          text: "Забрать заказ"
        }
      ]
    },
    {
      id: 2,
      name: "Работа",
      src: workIcon,
      tasks: [
        {
          id: 1,
          text: "Вечером meetup"
        },
        {
          id: 2,
          text: "Отправить письмо"
        }
      ]
    },
    {
      id: 3,
      name: "Цели",
      src: rocketIcon,
      tasks: [
        {
          id: 1,
          text: "Прочитать 24 книги за год"
        },
        {
          id: 2,
          text: "100 отжиманий в день"
        },
        {
          id: 3,
          text: "Слетать в космос"
        }
      ]
    },
    {
      id: 4,
      name: "Книги",
      src: bookIcon,
      tasks: [
        {
          id: 1,
          text: `Булгаков М.А. - "Мастер и Маргарита"`
        },
        {
          id: 2,
          text: `Дойл А.К. - "Собака Баскервилей"`
        },
        {
          id: 3,
          text: `Беляев А.Р. - "Человек-амфибия"`
        }
      ]
    },
  ],
  workingArea: {
    editMode: false,
    id: "",
    name: "",
    src: "",
    tasks: []
  },
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
    case SET_LIST_DATA:
      const listData = state.lists.find( ({id}) => id == action.payload.id);
    
      return {
        ...state,
        workingArea:{
          editMode: action.payload.statusMode,
          id: action.payload.id,
          name: listData.name,
          src: listData.src,
          tasks: listData.tasks.map(({id, text}) => ({id, text}))
        }
      };
        
    default:
      return state;
  }
};


export const setListData = (id, statusMode) => ({type: SET_LIST_DATA, payload:{id, statusMode}}); 


export default profileReducer;