import React from 'react';

import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should shows component with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="custom title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should shows component with the product title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
