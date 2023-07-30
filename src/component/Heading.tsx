import React from 'react'

type HeadingProp = {
    children: string
}

export const Heading = (props: HeadingProp) => {
    return (
        <div>{props.children}</div>
    )
}
