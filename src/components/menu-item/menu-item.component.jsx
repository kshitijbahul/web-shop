import React from 'react';
import './menu-item.style.scss';


const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
                <div className='background-image' 
                    /** 
                     * another way of adding css in the 
                     * React element , 
                     * Specially useful when it's a prop 
                     * */
                    style={{
                        backgroundImage : `url(${imageUrl})`
                    }}
                >

                </div>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    );
}

export default MenuItem;