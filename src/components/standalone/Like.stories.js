import React from 'react';
import Like from './Like';
import { action } from '@storybook/addon-actions';

export default {
  component: Like,
  title: 'Standalone/Like'
}

const actions = {
  onLike: action('onLike')
}

export const unliked = () => <Like isLiked={false} likeCount={3} {...actions} />
export const liked = () => <Like isLiked={true} likeCount={3} {...actions} />
export const withoutLikeCount = () => <Like isLiked={false} {...actions} />