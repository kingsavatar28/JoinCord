import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import profile from '../../icons/profile.png';

import './TextContainer.css';
                                                
const TextContainer = ({ users }) => (   
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <h2 className='chattingheading'>People currently chatting:</h2>
            <div className="activeContainer">
              <h4>
                
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt='profile icon' src={profile} height="20px"/>
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                       
                ))}
                  
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;