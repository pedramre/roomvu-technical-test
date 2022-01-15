import { initialState } from '../../action/theme/state'
import { actionType } from '../../action/theme/type'

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.toggle:
            document.querySelector("body").className = state.theme === 'light'?'dark':'light';
            return { ...state, theme: (state.theme === 'light'?'dark':'light') }
        default:
            return state
    }
}