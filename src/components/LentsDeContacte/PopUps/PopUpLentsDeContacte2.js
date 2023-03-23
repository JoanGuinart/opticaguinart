import React from "react"

function PopUpLentsDeContacte2(props) {
  return (props.trigger2) ? (
    <div className='popUp'>
        <div className='popUpInner'>
            <button className='closeButton' onClick={() => props.setTrigger2(false)}>X</button>
            {props.children}
        </div>
    </div>
  ): ""
}

export default PopUpLentsDeContacte2