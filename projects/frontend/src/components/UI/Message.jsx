import React from 'react'

const Message = ({children}) => {
  return (
    <div className="flex flex-column align-items-center">
        <p className="text-danger">{children}</p>
    </div>
  )
}

export default Message;