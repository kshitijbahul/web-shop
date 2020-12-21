import React from 'react';
import './menu-item.style.scss';


const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div style={{
            backgroundImage : `url(${imageUrl})`
        }} /** another way of adding css in the React element , 
            Specially useful when it's a prop */
        className={`${size} menu-item`}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    );
}

export default MenuItem;