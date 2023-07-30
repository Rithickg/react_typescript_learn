import React from 'react'
type StatusProps = {
    status: 'Loading' | 'Success' | 'Error'
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'Loading') {
        message = 'Loading...'
    } else if (props.status === 'Success') {
        message = 'Data fetched successfully'
    } else if (props.status === 'Error') {
        message = 'Error'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
