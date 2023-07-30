import React from 'react'
type stypeProps = {
    styles: React.CSSProperties
}

export const Style = (props: stypeProps) => {
    return (
        <div style={props.styles}>Text goes here</div>
    )
}
