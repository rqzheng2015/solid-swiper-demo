# solid-swiper-demo

This is an example project build for demostrating the use of Swiper in Solid.js projects

## Prerequisites

Run `pnpm install` to install the dependencies.

## Running commands

Development mode: The webstie will be hot updated once source file is changed.

```shell
pnpm dev
```

Production mode: The webstie will be first built and be served on a server process.

```shell
pnpm build
pnpm start
```

## Note
1. In SSR mode, the swiper component can't accept `breakpoints` property, because `breakpoints` property was designed to be an object. 
2. In CSR mode, the swiper component works perfectly with `breakpoints` property.
