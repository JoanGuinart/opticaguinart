import React from "react"

function PopUpLentsDeContacte(props) {
  return (props.trigger) ? (
    <div className='popUp'>
        <div className='popUpInner'>
            <button className='closeButton' onClick={() => props.setTrigger(false)}>X</button>
            {props.children}
        </div>
    </div>
  ): ""
}

export default PopUpLentsDeContacte