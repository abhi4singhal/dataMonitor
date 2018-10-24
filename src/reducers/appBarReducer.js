import initialState from './initialState';

const appBarReducer = (state = initialState.appBar, action) => {
  switch(action.type){
    case 'TAB_SELECT':
      return {...state, currentSelected: action.payload}
    case 'TAB_MOUSEOVER':
      return {...state, dropdown:{...state.dropdown,dropped: true, tab: action.payload}}
    case 'TAB_MOUSEOUT':
      return {...state, dropdown:{...state.dropdown,dropped: false, tab: ''}}
    default:
      return state;
  }
};

export default appBarReducer;
