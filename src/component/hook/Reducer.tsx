type counterState = {
    count: number
}

type updateAction = {
    type: 'increase' | 'decrease'
    payload: number
}

type resetAction = {
    type: 'reset'
}

type counterAction = updateAction | resetAction
export function reducer(state: counterState, action: counterAction) {
    switch (action.type) {
        case 'increase':
            return { count: state.count + action.payload }
        case 'decrease':
            return { count: state.count - action.payload }
        case 'reset':
            return { count: 0 }
        default:
            return state
    }
}