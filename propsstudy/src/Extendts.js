import React from 'react'

function Extendts({color,backgroundColor,isSpecial}){
    return (
        <div>
        <p style={{color, backgroundColor}}>  JSX ! </p>
        <p>{isSpecial ? <p>isSpecial</p> : null}</p>
        </div>
    )
}

export default Extendts