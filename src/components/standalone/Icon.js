import React from 'react';
import './Icon.scss';

function Icon({ name }) {
  const href = `assets/sprite.svg#${name}`;
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="vc-icon">
      <use href={href}></use>
    </svg>
  );
}
export default Icon;
