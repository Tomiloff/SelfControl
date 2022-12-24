import importantIcon from "../../assets/all-images/icons/important.svg"
import workIcon from "../../assets/all-images/icons/work.svg";
import rocketIcon from "../../assets/all-images/icons/rocket.svg";
import bookIcon from "../../assets/all-images/icons/book.svg";
import completedIcon from "../../assets/all-images/icons/completed.svg";
import basketIcon from "../../assets/all-images/icons/basket.svg";


const SET_LIST_DATA = "profile/SET_LIST_DATA";
const ADD_TASK = "profile/ADD_TASK";
const SET_ARCHIVE_DATA = "profile/SET_ARCHIVE_DATA";
const DELETE_TASK = "profile/DELETE_TASK";


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
          text: "Полёт в космос"
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
    titleSection: "",
    id: "",
    name: "",
    src: "",
    tasks: []
  },
  archive: [
    {
      id: 1,
      name: "Выполнено",
      src: completedIcon,
      tasks: [
        {
          id: 1,
          text: "Помыть машину"
        },
        {
          id: 2,
          text: "Сходить в магазин"
        }
      ]
    },
    {
      id: 2,
      name: "Корзина",
      src: basketIcon,
      tasks: [
        {
          id: 1,
          text: "Выбрость мусор"
        },
        {
          id: 2,
          text: "Прибраться"
        }
      ]
    }
  ]
};


const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_LIST_DATA:
    case SET_ARCHIVE_DATA:

      let currentData;
      if (action.payload.nameSection === "lists") {
        currentData = state.lists.find( ({id}) => id == action.payload.id);
      }
      else if (action.payload.nameSection === "archive") {
        currentData = state.archive.find( ({id}) => id == action.payload.id);
      }
      
      return {
        ...state,
        workingArea: {
          editMode: action.payload.statusMode,
          titleSection: action.payload.nameSection,
          id: action.payload.id,
          name: currentData.name,
          src: currentData.src,
          tasks: currentData.tasks.map(({id, text}) => ({id, text}))
        }
      };

    case ADD_TASK:  
      const currentTasksArr =  state.lists[action.payload.id - 1].tasks;
      return {
        ...state,
        ...currentTasksArr.push(
          {
            id: (!currentTasksArr.length) ? 1 : currentTasksArr[currentTasksArr.length - 1].id + 1,
            text: action.payload.text
          }
        )
      }

      case DELETE_TASK:
        const taskObj = state.lists[action.payload.listId - 1].tasks.find((el) => el.id === action.payload.taskId);
        const indexTask = state.lists[action.payload.listId - 1].tasks.indexOf(taskObj);
                
        return {
          ...state,
          ...state.lists[action.payload.listId - 1].tasks.splice(indexTask, 1),
        }
        
    default:
      return state;
  }
};


export const setListData = (id, nameSection, statusMode) => ({type: SET_LIST_DATA, payload:{id, nameSection, statusMode}}); 

export const setArchiveData = (id, nameSection, statusMode) => ({type: SET_ARCHIVE_DATA, payload:{id, nameSection, statusMode}});

export const addTask = (id, text) => ({type: ADD_TASK, payload:{id, text}});

export const deleteTask = (taskId, listId) => ({type: DELETE_TASK, payload:{taskId, listId}});



export default profileReducer;