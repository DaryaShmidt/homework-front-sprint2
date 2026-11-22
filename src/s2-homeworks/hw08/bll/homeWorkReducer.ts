import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up'){
                const newState= state.sort((a, b) => a.name.localeCompare(b.name))
                return newState
            }else {
                const newState= state.sort((a, b) => b.name.localeCompare(a.name))
                return newState
            }
        }
        case 'check': {
            const newState = state.filter(u => u.age >= action.payload)
            return newState // need to fix
        }
        default:
            return state
    }
}
