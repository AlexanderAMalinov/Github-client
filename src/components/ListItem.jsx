import React from 'react';

export const ListItem = (props) => (
  <li className='repo-list__list-item'>
    <span>{props.repoName}</span>
    <span>{props.stars}</span>
  </li>
);
