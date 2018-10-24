import * as ACTIONS from './actionTypes'

export function NavBarSwitch(tabName){
  return dispatch => {
    dispatch({type:ACTIONS.NAVBAR.TAB_SELECT ,payload:tabName})
  }
}

export function NavBarMouseOver(tabName){
  return dispatch => {
    dispatch({type:ACTIONS.NAVBAR.TAB_MOUSEOVER , payload:tabName})
  }
}

export function NavBarMouseOut(tabName){
  return dispatch => {
    dispatch({type:ACTIONS.NAVBAR.TAB_MOUSEOUT, payload:tabName})
  }
}
