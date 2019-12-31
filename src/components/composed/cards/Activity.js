import React from 'react';
import Profile from '../Profile';
import Product from './Product'
import './Activity.scss';

function Activity({ card, onFollow, onSeeProfile }) {
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
      <p class="feedProduct__title vc-text-l">
        {cardType === 'new-in' ? 'New in' : 'Price drop'}
      </p>
      <div className="feedProduct__slider">
        {products.map(product =>
          <div className="feedPD__item">
            {/* Todo: implement */}
            <Product product={product} likeCount={42} /> 
          </div>
        )}
        {orderedProducts.length > maxActivitiesShown &&
          <div className="feedMore">
            <div className="feedMore__wrapper">
              <div class="feedMore__wrapper__content vc-text-l">
                <span>+ {totalCardActivities - maxActivitiesShown}</span>
              </div>
              <button onClick={onSeeProfile} className="feedMore__wrapper__cta vc-text-s">
                See more
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default Activity;