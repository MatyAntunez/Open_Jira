import { useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export const UI_INITIAL_STATE = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI_OPEN_SIDEBAR' })
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI_CLOSE_SIDEBAR' })
  };

  const setIsAddingEntry = (isAdding) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
  };


  const startDraging = () => {
    dispatch({ type: 'UI - Start Dragging' })
  };


  const endDragging = () => {
    dispatch({ type: 'UI - End Dragging' })
  };

  return (
    <UIContext.Provider value={{
      sidemenuOpen: state.sidemenuOpen,

      //methods
      openSideMenu,
      closeSideMenu,

      setIsAddingEntry,
      startDraging,
      endDragging
    }}>
      {children}
    </UIContext.Provider>
  )
};













