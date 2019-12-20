import React from 'react';
import './ProductCard.scss';

import Like from './buttons/Like';

function ProductCard({ product, isLiked, likeCount, onLike }) {
  const imgixPath = 'https://vestiairecollective-dev.imgix.net'; // Should be somewhere else (like in env in ngx)
  const imgSrc = `${imgixPath}/produit/${product.image}`;

  return (
    <div className="feedProduct">
      <div className="feedProduct__like">
        <Like likeCount={likeCount} isLiked={isLiked} onLike={onLike}/>
      </div>
      <img className="feedProduct__img" src={imgSrc} alt="" />
      <p className="feedProduct__infos__brand vc-text-m">{product.brand}</p>
      <p className="feedProduct__infos__supp vc-text-s">{product.size}</p>
      {product.regularPrice && <p className="feedProduct__infos__price  feedProduct__infos__price--old vc-text-s">
        {product.regularPrice.formatted}
      </p>}
      <p className={"feedProduct__infos__price vc-text-s" + product.regularPrice ? "feedProduct__infos__price--new" : ''}>
        {product.price.formatted}
      </p>
    </div>
  );
}
export default ProductCard;