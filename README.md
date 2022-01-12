# CLF-Product-card

Este es un paquete de pruebas de despliegues en NPM

## Carlos Luciano Figueroa

## Ejemplo:

```js
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from clf-product-card
```

```js
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
