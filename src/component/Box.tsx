import { useContext } from "react"
import { context } from "./hook/Context"

export const Box = () => {
    const theme = useContext(context)
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Box Theme</div>
    )
}
