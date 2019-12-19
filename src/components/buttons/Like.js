import React from 'react';

// TODO: Make this component smart (aka do the like req ?)
function Like({ likeCount, isLiked, onLike }) {
  const classes = isLiked
    ? 'likeSnippet--vertical__icon liked'
    : 'likeSnippet--vertical__icon';
  let icon = isLiked
    ? <vc-sprite-icons class="likeSnippet--vertical__icon__svg" name="heart-full"></vc-sprite-icons>
    : <vc-sprite-icons class="likeSnippet--vertical__icon__svg" name="heart-line"></vc-sprite-icons>

  return (
    <button role="button" aria-label="like an item" class="likeSnippet--vertical" onClick={onLike}>
      <div className={classes}>
        {icon}
        <div className="vc-text-xs likeSnippet--vertical__count">
          <span>{likeCount}</span>
        </div>
      </div>
  </button>
  );
}
export default Like;