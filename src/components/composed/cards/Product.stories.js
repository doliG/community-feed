import React from 'react';
import Product from './Product';
import { action } from '@storybook/addon-actions';

export default {
  component: Product,
  title: 'Composed/cards/Product'
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

const actions = {
  onLike: action('onLike')
}

function HOC(props) {
  return (
    <div style={{ display: 'flex '}}>
      <div style={{ flex: "0 0 200px" }}>
        <Product {...props } />
      </div>
    </div>
  );
}

export const classic = () => <HOC product={productMock} isLiked={false} likeCount={42} {...actions} />;
export const withoutDicount = () => <HOC product={{...productMock, regularPrice: undefined }} likeCount={42} {...actions} />;