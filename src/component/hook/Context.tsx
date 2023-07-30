import { createContext } from "react"

type contextProviderProps = {
    children: React.ReactNode
}
const theme = {
    primary: {
        main: '#3f51b5',
        text: '#fff',
    },
    secondary: {
        main: '#f50057',
        text: '#fff',
    }
}

export const context = createContext(theme)

export const ThemeContext = ({ children }: contextProviderProps) => {
    return <context.Provider value={theme}>{children}</context.Provider>
}