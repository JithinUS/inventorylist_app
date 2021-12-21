import React from 'react';
import '../styles/Home.css'

export default function Screen() {
    return (
        <div>
            <div className="div1">
                    <div className="wrapper">
                        <ul className="dynamic-txts">
                            <li><span>Welcome to the</span></li>
                            <li><span>All New</span></li>
                            <li><span>Inventory List App</span></li>
                        </ul>
                    </div>
                    <h5 className='h1' style={{color:'white'}}>You can add , View , Remove your Products Here....!  </h5>
            </div>
        </div>
    )
}
