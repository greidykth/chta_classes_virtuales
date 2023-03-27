import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../../src/context/socket';

export default function ListComponent() {
    // const socket = useContext(SocketContext); 

    // useEffect(() => {
    //     // here we can use socket events and listeners
    //     socket.on('message', (args: any) => {
    //         console.log('escuchado', {args});
    //         socket.emit("response", "escuché: " + args);
    //     });
    // }, [])

  return (
    <div>
      Hola desde listthryrt
    </div>
  )
}
