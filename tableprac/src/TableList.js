import React from 'react'

function Table({table}) {
    const widthPercentageTable = '50%'
    const heightPercentageTable = '300px'
    
    const square = {
        width : widthPercentageTable,
        height : heightPercentageTable,
        border: '1px solid '
    }
    const imgStyle = {
        width : 300,
        height : 300
    }
    
    return(
        <>
        <div style={square}>             
            <img style={imgStyle} src={table.src} alt={table.alt}></img>
        </div> 
        
        </>

    )
}

function TableList({tables}){
    return (
        <div> 
            {tables.map(table => (
                <Table table={table} key={table.id} />
            ))}
        </div>
    )
}

export default TableList