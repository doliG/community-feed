import React from 'react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon'
};

// Please note that icon have a lot of others possibilities, please refer to
// vc-icons in ngx to know more

export const pinFull = () => <Icon name="pin-full"/>;
export const badgeExpert = () => <Icon name="badge-expert"/>;
export const badgeTrusted = () => <Icon name="badge-trusted"/>;
export const arrowUp = () => <Icon name="arrow-up" />;
export const heartLine = () => <Icon name="heart-line"/>;
export const heartFull = () => <Icon name="heart-full"/>;