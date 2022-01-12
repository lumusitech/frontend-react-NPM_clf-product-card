import React from 'react';

import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should shows component with the custom img', () => {
    const wrapper = renderer.create(<ProductImage img="imagen.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should shows component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
