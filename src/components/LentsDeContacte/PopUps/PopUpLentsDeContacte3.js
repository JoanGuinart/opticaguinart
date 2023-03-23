import React from "react"

function PopUpLentsDeContacte3(props) {
  return (props.trigger3) ? (
    <div className='popUp'>
        <div className='popUpInner'>
            <button className='closeButton' onClick={() => props.setTrigger3(false)}>X</button>
            {props.children}
        </div>
    </div>
  ): ""
}

export default PopUpLentsDeContacte3