import React from 'react';
import './Like.scss'
import Icon from '../Icon';

// TODO: Make this component smart (aka do the like req ?)
function Like({ likeCount, isLiked, onLike }) {
  const classes = isLiked
    ? 'likeSnippet--vertical__icon liked'
    : 'likeSnippet--vertical__icon';
  const icon = isLiked
    ? <Icon name="heart-full" />
    : <Icon name="heart-line" />

  return (
    <button role="button" aria-label="like an item" class="likeSnippet--vertical" onClick={() => onLike()}>
      <div className={classes}>
        <div className="likeSnippet--vertical__icon__svg">
          {icon}
        </div>
        <div className="vc-text-xs likeSnippet--vertical__count">
          <span>{likeCount}</span>
        </div>
      </div>
  </button>
  );
}
export default Like;