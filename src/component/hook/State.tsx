import React, { useState } from 'react'
type authUser = {
    name: string,
    email: string
}

export const State = () => {
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null)
    const [user, setUser] = useState<authUser | null>(null)
    const handleLogin = () => {
        setLoggedIn(true)
        userIn()
    }
    const handleLogout = () => {
        setLoggedIn(false)
        userOut()

    }
    const userIn = () => {
        setUser({
            name: "Rithick",
            email: "rithick@gmail.com"
        })
    }
    const userOut = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User is {loggedIn ? "Logged In" : "Logged Out"}</h2>
            <h2>Username: {user?.name} and email: {user?.email}</h2>
        </div>
    )
}
