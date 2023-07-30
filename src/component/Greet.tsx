import React from 'react'
type Props = {
    name: string,
    messgeCount: number,
    nameArray: {
        first: string,
        last: string
    }[]
}

export const Greet = (props: Props) => {
    return (
        <div>
            <h1>Welcome back,{props.name} nice to see you again ! You have {props.messgeCount} messages</h1>
            {props.nameArray.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}
