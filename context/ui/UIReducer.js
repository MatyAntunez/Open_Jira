import { UI_INITIAL_STATE } from ".";




export const uiReducer = (state = UI_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UI_OPEN_SIDEBAR':
            return {
                ...state,
                sidemenuOpen: true
            }
        case 'UI_CLOSE_SIDEBAR':
            return {
                ...state,
                sidemenuOpen: false
            }
        case 'UI - Set isAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
            }
        case 'UI - Start Dragging':
            return {
                ...state,
                dragStarted: true
            }
        case 'UI - End Dragging':
            return {
                ...state,
                dragStarted: false
            }



        default: return { ...state }
    }
};