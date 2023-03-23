import React from "react"

function PopUpLentsDeContacte4(props) {
  return (props.trigger4) ? (
    <div className='popUp'>
        <div className='popUpInner'>
            <button className='closeButton' onClick={() => props.setTrigger4(false)}>X</button>
            {props.children}
        </div>
    </div>
  ): ""
}

export default PopUpLentsDeContacte4