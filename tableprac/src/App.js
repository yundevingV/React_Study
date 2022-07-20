
import React, {useState } from 'react';

import TableList from './TableList';
import Map from './Map';

const init ={
  tables : [
    {
      id :1,
      src : 'https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/baa0b731-c101-4dc7-837a-305067b65b5b.png',
      alt : 'X'
      
    },
    {
      id :2,
      src : 'https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c8382791-88b5-47b2-a4b6-421f9e7cfa0c.png',
      alt : 'X'
    },
    {
      id :3,
      src : 'https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c01fc7e0-f580-4dbe-84fd-c7ecd6e97d88.png',
      alt : 'X'
    },    
  ]
}


function App() {
  const [state] = useState(init)
  
  
  const {tables} = state

  return (
    <>
      <Map />
      <TableList tables={tables} />
      
    </>
  );
}

export default App;
