import React from 'react';
import Profile from './Profile';

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
  title: 'Profile'
};

export const basic = () => <Profile profile={profileMock} />;

// TODO
// - sans avatar