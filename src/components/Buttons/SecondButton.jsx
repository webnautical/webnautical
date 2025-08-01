import React from 'react'

function SecondButton({children}) {
  return (
     <button className="send_subscribe_act_btn mt-3">
    <span>{children}</span>
  </button>
  )
}

export default SecondButton