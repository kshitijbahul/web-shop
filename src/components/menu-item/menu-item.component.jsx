import React from 'react';
// withRouter is a higher order component that 
// takes a component and modifies it in some way
import { withRouter } from 'react-router-dom'; 
import './menu-item.style.scss';


const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem); //Here we are now wrapping the component in the withRouter to get access to Route props