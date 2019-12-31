import React from 'react';
import Profile from './Profile';
import ProductCard from './ProductCard'
import './Card.scss';

function Card({ card, onFollow, onSeeProfile }) {
  const maxActivitiesShown = 4; // Should be somewhere else ? Props maybe ?
  const { actor, cardType, orderedProducts, totalCardActivities } = card;
  const products = orderedProducts.slice(0, maxActivitiesShown);

  return (
    <div className="feedCard">
      <div className="feedCard__profile">
        <Profile
          profile={actor}
          cardType={cardType}
          onFollow={onFollow}
          onSeeProfile={onSeeProfile}
        />
      </div>
      <p class="feedProduct__title vc-text-l">Price drop</p>
      <div className="feedProduct__slider">
        {products.map(product =>
          <div className="feedPD__item">
            <ProductCard product={product} />
          </div>
        )}
        {orderedProducts.length > maxActivitiesShown &&
          <div className="feedMore">
            <div className="feedMore__wrapper">
              <div class="feedMore__wrapper__content vc-text-l">
                <span>+ {totalCardActivities - maxActivitiesShown}</span>
                See more
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default Card;