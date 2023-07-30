import { useReducer } from "react"
import { reducer } from './hook/Reducer'
const initialState = { count: 0 }


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            count:{state.count}
            <button onClick={() => dispatch({ type: 'increase', payload: 10 })}>increase by 10</button>
            <button onClick={() => dispatch({ type: 'decrease', payload: 10 })}>decrease by 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

        </div>
    )
}