import React from 'react'
import './UserOptionButtons.css'

function UserOptionButtons({ Icon, text, onClick }) {
    return (
        <div className='inputOption' onClick={onClick}>
            <Icon icon={Icon} />
            <p>{text}</p>
        </div>
    )
}

export default UserOptionButtons
