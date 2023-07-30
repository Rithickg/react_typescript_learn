import { useEffect, useState } from "react";
// import { userSlice } from '../redux/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../redux/types'
import { setUser, userSelector, User } from '../redux/features/user/userSlice'
export const Login = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [newUserName, setNewUserName] = useState<string>("");
    const [newUserEmail, setNewUserEmail] = useState<string>("");
    const dispatch = useAppDispatch()
    const selectedUser = useAppSelector(userSelector)
    console.log(selectedUser)

    useEffect(() => {
        setUsers(selectedUser);
        return () => {
            console.log("component unmounting...");
        };
    }, [selectedUser]);
    function handleAddUser() {
        const newUser = {
            id: (users.length + 1).toString(),
            name: newUserName,
            email: newUserEmail,
        };
        dispatch(setUser(newUser));
    }
    return (
        <div>
            {users.map((user) => (
                <li key={user.id}>
                    {user.id} | {user.name} | {user.email}
                </li>
            ))}
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    aria-label="name"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Email"
                    aria-label="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                ></input>
                <button type="submit" className="btn" onClick={handleAddUser}>
                    Add
                </button>
            </div>
        </div>
    )
}
