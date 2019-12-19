import React from 'react';
import ProductCard from './ProductCard';
import { action } from '@storybook/addon-actions';

export default {
  component: ProductCard,
  title: 'Product'
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

export const classic = () => <ProductCard product={productMock} {...actions} />;
export const withoutDicount = () => <ProductCard product={{...productMock, regularPrice: undefined }} {...actions} />;