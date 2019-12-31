import React from 'react';
import Activity from './Activity';
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

const currencyUnitMock = {
  code: 'EUR',
  amountInCents: 123456,
  formatted: '123,45E'
};
const productMock = {
  productId: 'abc123',
  brand: 'Prada',
  name: 'Super sac bien cher',
  image: '8561667-1_24378.jpg',
  likesCount: 123,
  regularPrice: currencyUnitMock,
  price: currencyUnitMock,
  size: 'm',
  published: new Date()
};

const cardMock = {
  id: 'qwerty123',
  type: 'feed_card',
  cardType: 'new-in',
  createdAt: new Date(),
  updatedAt: new Date(),
  actor: profileMock,
  orderedProducts: [productMock, productMock, productMock, productMock, productMock, productMock],
  totalCardActivities: 6,
  recommendedProfiles: [profileMock, profileMock, profileMock]
};

const actions = {
  onFollow: action('onFollow'),
  onSeeProfile: action('onSeeProfile')
};


export default {
  component: Activity,
  title: 'Composed/cards/Activity'
};

export const classic = () =>  <Activity card={cardMock} {...actions} />;