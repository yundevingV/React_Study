import React, {useState} from 'react'

function Use(){
    const [num,setNUm] = useState(0)

    const up = () => {
        setNUm(pnum => pnum+1)
    }
    const down = () => {
        setNUm(pnum => pnum-1)
    }

    return(
        <div>
            <p> {num} </p>
            <button onClick={up}>+1</button>
            <button onClick={down}>-1</button>
        </div>
    )
}

export default Use