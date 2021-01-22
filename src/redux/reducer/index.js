import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_INPUT_TEXT,
  UPDATE_ITEM
} from '../actions';

const DEFAULT_INITIAL_STATE = {
  inputText: '',
  itemToUpdate: undefined,
  items: []
};

function saveToLocalStorage(state = {}) {
  localStorage.setItem('data', JSON.stringify({ items: state.items }));
  return state;
}

function loadFromLocalStorage() {
  const dataRaw = localStorage.getItem('data');
  if (dataRaw) {
    try {
      return JSON.parse(dataRaw);
    } catch (e) {}
  }
  return DEFAULT_INITIAL_STATE;
}

const INITIAL_STATE = loadFromLocalStorage();

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM:
      return saveToLocalStorage({
        ...state,
        items: [...state.items, action.item],
        inputText: '',
        itemToUpdate: undefined
      });
    case UPDATE_ITEM:
      return saveToLocalStorage({
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.item.id) {
            return action.item;
          }
          return item;
        }),
        inputText: '',
        itemToUpdate: undefined
      });
    case SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.text,
        itemToUpdate: action.itemToUpdate
      };
    case DELETE_ITEM:
      return saveToLocalStorage({
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id)
      });
    default:
      return state;
  }
}

export default listReducer;