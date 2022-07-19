
import React, {useState } from 'react';

import TableList from './TableList';
import Map from './Map';

const init ={
  tables : [
    {
      id :1,
      name : 'a'
    },
    {
      id :2,
      name : 'aa'
    },
    {
      id :3,
      name : 'aaa'
    },
    {
      id :3,
      name : 'aaa'
    },
    {
      id :3,
      name : 'aaa'
    },
    {
      id :3,
      name : 'aaa'
    }
  ]
}


function App() {
  const [state,setState] = useState(init)

  const {tables} = state

  return (
    <><Map />
      <TableList tables={tables} />
      
    </>
  );
}

export default App;
