# `@storybook/react-webpack5` issue with libraries

## The problem

`@storybook/react-webpack5` does not work with libraries. The error that is thrown is:

```bash
   ERROR in ./libs/my-lib-nonbuildable/src/lib/my-lib-nonbuildable.stories.tsx 2:0-45
   Module not found: Error: Can't resolve 'core-js/modules/es.object.assign.js' in '/Users/katerina/Projects/nrwl/test_nx_workspaces/sbwebpack/libs/my-lib-nonbuildable/src/lib'
   resolve 'core-js/modules/es.object.assign.js' in '/Users/katerina/Projects/nrwl/test_nx_workspaces/sbwebpack/libs/my-lib-nonbuildable/src/lib'
```

Full error here: [https://app.warp.dev/block/iyguXRbn6NsVtVPa3s2Co1](https://app.warp.dev/block/iyguXRbn6NsVtVPa3s2Co1)

Since this is only happening for the `@storybook/react-webpack5` builder and with libraries, I think it may be an issue with the builder. Is seems to only work with projects built with `webpack`.

`@storybook/react-vite` works in all cases. Whereas `@storybook/react-webpack5` seems to only work with projects that are built with `webpack`.

## How to reproduce

1. Clone this repo
2. Install dependencies: `npm ci`
3. Run Storybook:

### Buildable libraries

#### Buildable with Rollup - Storybook builder `@storybook/react-webpack5`

```bash
npx nx storybook my-lib-rollup
```

Observe error.

#### Buildable with Rollup - Storybook builder `@storybook/react-vite`

```bash
npx nx storybook my-lib-rollup-with-sb-vite
```

No error here! It works!

#### Buildable with Vite - Storybook builder `@storybook/react-vite`

```bash
npx nx storybook my-lib-vite
```

No error here! It works!

### Non-buildable library

#### Non-buildable - Storybook builder `@storybook/react-webpack5`

```bash
npx nx storybook my-lib-nonbuildable
```

Observe error.

#### Non-buildable - Storybook builder `@storybook/react-vite`

```bash
npx nx storybook my-lib-nonbuildable-sb-vite
```

No error here! It works!
