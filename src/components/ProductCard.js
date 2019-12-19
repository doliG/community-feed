import React from 'react';
import './ProductCard.scss';

function ProductCard({ product, onLike }) {
  const imgixPath = 'https://vestiairecollective-dev.imgix.net'; // Should be somewhere else (like in env in ngx)
  const imgSrc = `${imgixPath}/produit/${product.image}`;

  return (
    <div className="feedProduct">
      <button onClick={onLike} className="feedProduct__like">
        {product.likesCount && `(${product.likesCount})`} Like
      </button>
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