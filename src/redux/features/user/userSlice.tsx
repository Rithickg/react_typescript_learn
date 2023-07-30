import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface User {
    id: string;
    name: string;
    email: string;
}

const initialState: Array<User> = [{
    id: "1",
    name: "Rithick",
    email: "rithick@gmail.com"
}]

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);

        }
    }
})

export const { setUser } = userSlice.actions

export const userSelector = (state: RootState) => state.user

export default userSlice.reducer