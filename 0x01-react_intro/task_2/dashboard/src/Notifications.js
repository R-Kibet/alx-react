import React from 'react';
import "./Notifications.css"
import close_icon from "./assets/close-icon.png"
import { getLatestNotification } from './utils';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>

            <ul>
                <li  data-priority='default' style={{ color:'blue'}}>New course available</li>
                <li data-priority='urgent' style={{
                    color: 'red',
                }}>New resume available</li>
                <li data-priority='urgent' style= {{ color: 'red'
            }}>
                    <div 
                    dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}>
                    </div>
                </li>
            </ul>
            <button
            type="button"
            aria-label='close'
            onClick={() => console.log('Close button has been clicked')}
            style={{
                display:'inline-block',
                position: 'absolute',
                top: '30px',
                right: '5px',
                background: 0,
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                
            }}
            >
                <img src={close_icon} alt='' style={{ width: '20px', height: '20px' }}/>

            </button>
        </div>
    )
}