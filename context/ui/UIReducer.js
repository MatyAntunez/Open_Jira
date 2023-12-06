import { UI_INITIAL_STATE } from ".";
import { uiCloseSidebar, uiOpenSidebar } from "./actions";




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



        default: return { ...state }
    }
};