import React from 'react'
import './UserOptionButtons.css'

function UserOptionButtons({ Icon, text }) {
    return (
        <div className='inputOption'>
            <Icon icon={Icon} />
            <p>{text}</p>
        </div>
    )
}

export default UserOptionButtons
