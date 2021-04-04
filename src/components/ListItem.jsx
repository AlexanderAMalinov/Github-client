import React from 'react';
import '../../images/star.png';
import '../../images/repo.png';

export const ListItem = (props) => (
  <li className='repo-list__list-item'>
    <img src='../../images/repo.png' className='list-item__icon'/>
    <div className="list-item__name-star-container">
      <div>{props.repoName}</div>
      <div>
        <img src='../../images/star.png' className='list-item__star'/>
        <span>{props.stars}</span>
      </div>
    </div>
  </li>
);
