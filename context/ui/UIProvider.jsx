
import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export const UI_INITIAL_STATE = {
  sidemenuOpen: false
};

export const UIProvider = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI_OPEN_SIDEBAR' })
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI_CLOSE_SIDEBAR' })
  };

  return (
    <UIContext.Provider value={{
      sidemenuOpen: state.sidemenuOpen,

      //methods
      openSideMenu,
      closeSideMenu,
    }}>
      {children}
    </UIContext.Provider>
  )
};













