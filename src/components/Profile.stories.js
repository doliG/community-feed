import React from 'react';
import Profile from './Profile';
import { action } from '@storybook/addon-actions';

const profileMock = {
  describes: {
    type: 'feed_profileDescription',
    profileType: 'Person',
    id: 'qwerty123',
    url: '',
    name: 'John Cena',
    picture: '7383412-fe80b447f9cde98a19da0c1e0e0a89e6.jpg',
    location: 'United States, Massachusetts',
    followers: 123,
    sellerBadge: 'expert'
  },
  isFollowed: true
};

export default {
  component: Profile,
  title: 'Feed/Card/Profile'
};

const actions = {
  onFollow: action('onFollow'),
  onSeeProfile: action('onSeeProfile')
};

export const followed = () =>  <Profile profile={profileMock} {...actions} />;
export const notFollowed = () =>  <Profile profile={{ ...profileMock, isFollowed: false }} {...actions} />;

// TODO
// - sans avatar