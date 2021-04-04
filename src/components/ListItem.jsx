import React from 'react';

export const ListItem = (props) => (
  <li className='repo-list__list-item'>
    <i className='list-item__icon'/>
    <div className="list-item__name-star-container">
      <div>{props.repoName}</div>
      <div>
        <i/>
        <span>{props.stars}</span>
      </div>
    </div>
  </li>
);
